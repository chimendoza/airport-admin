
import axios from 'axios';
import router from '../router'

const DEV_API='http://localhost:8007/api/v1';
const PROD_API='https://airportback.sdektun.com/api/v1';


const apiUrl=process.env.NODE_ENV === 'development'?DEV_API:PROD_API;


// Creamos una instancia de axios para que se puedan compartir la misma configuración en toda la aplicación

const api = axios.create({
  baseURL: apiUrl,
});

// Interceptamos todas las solicitudes realizadas por axios
api.interceptors.request.use((config) => {
  
    
  // Obtenemos el token de acceso almacenado en el almacenamiento local (localStorage)
  const accessToken = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${accessToken}`;

  
  return config;
});


api.interceptors.response.use(
  response => {
    
    return response;
  },
  async error => {


    
    if(error.config.url.indexOf('auth/login')!=-1){

      
      return Promise.reject(error);

    }
    
    const originalRequest = error.config;
    if ((error.response.status === 440 || error.response.status === 401 || error.response.status === 500) && !originalRequest._retry) {
      originalRequest._retry = true;
      try {

        
        const token = localStorage.getItem('refresh_token');
        const { data } = await axios.post(apiUrl+'/auth/refreshaccesstoken', { token });
        
        

            if(!data.token){
              router.push('/login');
            }else{


              localStorage.setItem('access_token', data.token);
              localStorage.setItem('refresh_token', data.refresh_token);
              localStorage.setItem('user_name',data.name);
              localStorage.setItem('user_profile',data.profile);
              localStorage.setItem('branch_id',data.branch_id);
              if(data.branches){
                localStorage.setItem('branches', JSON.stringify(data.branches));
              }
      
              localStorage.setItem('branch_name',data.branch);
              localStorage.setItem('user_id',data.user_id);
              

              localStorage.setItem('permissions', data.permissions);

              if(data.reload==1){
                
                window.location.reload();
              }
              
              return api(originalRequest);
            }
        
      } catch (error) {
        // Manejar errores al solicitar un nuevo token de acceso
        
        console.error(error);
       // Vue.prototype.$router.push('/user/login');
        router.push('/login');

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);



export default api;

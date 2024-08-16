import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Dashboard.vue'
import layout from '../layout/index.vue'
import login from '../layout/login.vue'
import blank from '../layout/blank.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout,
      children:[

        {
          path:'',
          name: 'home',
          component:HomeView

        }


      ]
    },

    {

      path: '/airlines',
      name:'airlines',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listAirlines',
          component: () => import('@/views/airlines/index.vue')
         },
         {
          'path':'create',
          'name':'createAirline',
          component: () => import('@/views/airlines/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateAirline',
          component: () => import('@/views/airlines/update.vue')
         },
         {
          'path':'view/:id',
          'name':'viewAirline',
          component: () => import('@/views/airlines/view.vue')
         }




      ]
    },
    {

      path: '/aircrafts',
      name:'aircrafts',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listaircrafts',
          component: () => import('@/views/aircrafts/index.vue')
         },
         {
          'path':'create',
          'name':'createaircraft',
          component: () => import('@/views/aircrafts/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateaircraft',
          component: () => import('@/views/aircrafts/update.vue')
         },
         {
          'path':'view/:id',
          'name':'viewaircraft',
          component: () => import('@/views/aircrafts/view.vue')
         }




      ]
    },
    {

      path: '/seatclasses',
      name:'seatclasses',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listseatclasses',
          component: () => import('@/views/seatclasses/index.vue')
         },
         {
          'path':'create',
          'name':'createseatclass',
          component: () => import('@/views/seatclasses/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateseatclass',
          component: () => import('@/views/seatclasses/update.vue')
         },
         {
          'path':'view/:id',
          'name':'viewseatclass',
          component: () => import('@/views/seatclasses/view.vue')
         }




      ]
    },
    {

      path: '/seats',
      name:'seats',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listseats',
          component: () => import('@/views/seats/index.vue')
         },
         {
          'path':'create',
          'name':'createseat',
          component: () => import('@/views/seats/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateseat',
          component: () => import('@/views/seats/update.vue')
         },
         {
          'path':'view/:id',
          'name':'viewseat',
          component: () => import('@/views/seats/view.vue')
         }




      ]
    },

    {

      path: '/flights',
      name:'flights',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listflights',
          component: () => import('@/views/flights/index.vue')
         },
         {
          'path':'create',
          'name':'createflight',
          component: () => import('@/views/flights/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateflight',
          component: () => import('@/views/flights/update.vue')
         },
         {
          'path':'view/:id',
          'name':'viewflight',
          component: () => import('@/views/flights/view.vue')
         }




      ]
    },

    {

      path: '/customers',
      name:'customers',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listCustomers',
          component: () => import('@/views/customers/index.vue')
         },
         {
          'path':'create',
          'name':'createCustomer',
          component: () => import('@/views/customers/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateCustomer',
          component: () => import('@/views/customers/update.vue')
         },
         {
          'path':'view/:id',
          'name':'viewCustomer',
          component: () => import('@/views/customers/view.vue')
         }




      ]
    },

    {

      path: '/payments',
      name:'payments',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listpayments',
          component: () => import('@/views/payments/index.vue')
         },
         {
          'path':'view/:id',
          'name':'viewPayment',
          component: () => import('@/views/payments/view.vue')
         }




      ]
    },

    {

      path: '/users',
      name:'users',
      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listUsers',
          component: () => import('@/views/users/index.vue')
         },
         {
          'path':'create',
          'name':'createUser',
          component: () => import('@/views/users/create.vue')
         },
         {
          'path':'update/:id',
          'name':'updateUser',
          component: () => import('@/views/users/update.vue')
         }



      ]
    },
    {

      path: '/profiles',
      name:'profiles',      
      component: layout,
      children:[

         {
          'path':'',          
          name:'listProfile',
          component: () => import('@/views/profiles/index.vue')
         },
         {
          'path':'create',
          'name':'createProfile',
          component: () => import('@/views/profiles/form.vue')
         },
         {
          'path':'update/:id',
          'name':'updateProfile',
          component: () => import('@/views/profiles/form.vue')
         }



      ]
    },



    {

      path: '/login',
      component: login,
      name: 'login'
    }


  ]
})

export default router

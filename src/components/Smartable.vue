    <template>
        
        <table class="table table-sm">
        <tbody>

            <tr v-for="(item,index) in services" :key="index">

            
            <td>
                <div class="form-check form-check-flat form-check-primary">
                <label class="form-check-label"><input class="form-check-input" type="checkbox" v-model="modelValue.comboservices" true-value="1" false-value="0" v-bind:value="item.id"/> {{item.name}} <i class="input-helper"></i></label>
                </div>

            </td>
            
            <td>
                ${{ item.price }}

            </td>
            <td><a class="btn btn-danger btn-sm"><i class="mdi mdi-delete"></i></a></td>
            </tr>

        </tbody>
        </table>

    </template>


<script>
    

</script>
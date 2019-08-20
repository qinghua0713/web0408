   <template>
  <div  class="pleaseLogin">
    
    
    <div class="title">
        <p>您还没有登录，请先<a href="/logon">登录</a></p>
    </div>
   <Tab type="2"></Tab>
  </div>
  
</template>

   <script>
import Tab from '../tab/tabPage'
export default {
  name: "pleaseLogin",
  data() {
    return {
     
    };
  },
   components:{
        Tab
    }
};
</script>
   <style>
.title a{
  text-decoration: underline;
  color: blue;
}
 
</style>
   
   

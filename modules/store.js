const store={
    debug:true,
    state:{
        message:'hellow'
    },
    setMessageAction(newValue){
        if(this.debug){
            console.log('setMessageAction triggered with', newValue);
        }else{
            this.stata.message=this.newValue;
        }
    },
    clearMessageAction(newValue){
        if(this.debug)
        console.log('setMessageAction triggered with');
        this.stata.message='';  
    }
}
export default{
    store
}
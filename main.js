const vue = new  Vue ({
    el:'#app',
    data:{
        text: ''

    },
    methods:{
        addText (add){
            this.text = "";
        },
        removeText (index){
            this.text.splice(index,1);
            this.text="";
        }
    }    
}); 
const vue = new  Vue ({
    el:'#app',
    data:{
        text: '',
        todolist:[]

    },
    methods:{
        addText (){
            const newtodoObject = {
                text: this.text,
                done: false              
            }           
            this.todolist.push(newtodoObject)
            this.text="";
        },
        removeText (index){
            this.todolist.splice(index,1);          
        }
    }    
}); 
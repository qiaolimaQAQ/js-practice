var that;
class tab{
    constructor(id){
        that= this;
        this.main = document.querySelector(id);
        this.lists = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        this.init();
    }
    init (){
        this.add.onclick = this.addTab;
        for(var i=0;i<this.lists.length;i++){
            this.lists[i].index = i;
            this.lists[i].onclick = this.toggleTab;
        }
    } 

    toggleTab (){
        that.clearclass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';  
    }

    clearclass (){
        for(var i = 0; i < this.lists.length;i++){
            this.lists[i].className = '';
            this.sections[i].className = '';
        }
    }

    addTab (){
        
    }

    removeTab (){}

    editTab (){}
}
new tab('#tab');

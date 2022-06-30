var that;
class Tab{
    constructor(id){
        that= this;
        this.main = document.querySelector(id);
        this.lists = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.init();
    }
    init() {

        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lists.length; i++) {
            this.lists[i].index = i;
            this.lists[i].onclick = this.toggleTab;

        }
    }

    toggleTab (){
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }

    clearClass (){
        for(var i = 0; i < this.lists.length;i++){
            this.lists[i].className = '';
            this.sections[i].className = '';
        }
    }

    addTab (){
        that.clearClass();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend', li);
        that.init();
        console.log(1111);
    }

    removeTab (){}

    editTab (){}
}
new Tab('#tab');

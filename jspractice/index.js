var that;
class Tab{
    constructor(id){
        that= this;
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        
        this.init();
    }


    init() {
        this.updateNode();

        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lists.length; i++) {
            this.lists[i].index = i;
            this.lists[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }


    }
    updateNode(){
        this.lists = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');


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
        var random = Math.random();
        var li = '<li class="liactive"><span>New Tab</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend', li);
        var section = '<section class="conactive">测试'+random+'</section>'
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
        console.log(1111);

    }

    removeTab (event){
        event.stopPropagation();
        var index = this.parentNode.index;
        console.log(index);
        that.lists[index].remove();
        that.sections[index].remove();
        that.init();
        if(document.querySelector('.liactive')) return;
        index--;
        that.lists[index] && that.lists[index].click();

    }

    editTab (){
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function (){
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (e){
            if(e.key === 'Enter'){
                this.onblur();
            }
        }


    }
}
new Tab('#tab');

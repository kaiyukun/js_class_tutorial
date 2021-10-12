(() => {
    // クラス
    class Accordion {
        // 初期化のメソッド
        constructor(obj){
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
        
            const triggerLen = $trigger.length;
            // console.log($elm);
            let index = 0;
            while (index < triggerLen) {
                // クラスで関数を呼び出す場合はthisを使わないといけない、その場合thisはクラスを参照する
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

        // クリックされたら実行される処理（クラスの中で関数を定義する場合はconstはいらない）
        clickHandler = (e) => {
            e.preventDefault();
    
            const $target = e.currentTarget;
            
            const $content = $target.nextElementSibling;
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            }else{
                $content.style.display = 'block';
            }
        };    
    }

    // インスタンス
    const fuckingAccordion = new Accordion({
        hookName: "#js-faq",
        tagName: "p"
    });
    const nothingAccordion = new Accordion({
        hookName: "#js-accordion",
        tagName: "a"
    })
})();
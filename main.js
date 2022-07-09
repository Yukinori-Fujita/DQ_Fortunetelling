// このファイルに処理を記述する
// 1
let btn = document.getElementById("btn");
// console.log(btn);
// 2
btn.addEventListener("click", function () {
    // 2
    let text = document.getElementById("input");
    // console.log(text);
    // 3
    const input_text = text.value;
    if (input_text != "") {
        console.log(input_text);
        // 4
        let li_tag = document.createElement("li");
        // 5
        li_tag.classList.add("list");
        // 6
        li_tag.textContent = input_text + "なあなたは";
        // 7
        let todo_list = document.getElementsByClassName("todo-list")[0];//配列
        console.log(todo_list);
        // 8
        todo_list.appendChild(li_tag);
        // 画像の出力
        let img = document.createElement("img");
        img.classList.add("img_css");
        let p_tag = document.createElement("p");
        let todo_list2 = document.getElementsByClassName("todo-list2")[0];
        todo_list2.appendChild(img);
        todo_list2.appendChild(p_tag);
        console.log(todo_list2);
        switch (input_text) {
            case "しゃこうてき":
                img.src = "./img/dq-slim.jpeg";
                // img.value;
                p_tag.textContent = "スライムです！人と仲良くなるのが得意なあなたはまさに国民的モンスタースライムそのもの！どのパーティでもあなたはあなたなりの良さを発揮し、欠かせない存在となるでしょう！";
                break;
            case "がんばりや":
                img.src = "./img/show.jpeg";
                img.value;
                p_tag.textContent = "おおきづちです！何事に対しても手を抜かないあなたはパーティの精神的支柱となるでしょう！でも、頑張りすぎて疲れたときは仲間を頼って！";
                break;
            case "やさしい":
                img.src = "./img/hoiminn.jpeg";
                img.value;
                p_tag.textContent = "ホイミスライムです！誰に対しても優しく振る舞えるあなたはパーティでの回復担当のホイミスライム！みんなを回復させることに夢中になってあなた自身の回復を怠らないで！";
                break;
            case "きれもの":
                img.src = "./img/nt_210613killer12.jpeg";
                img.value;
                p_tag.textContent = "キラーマシンです！センスの塊のあなたはパーティー内で他の人が思いつかないことを実際にやってみせることができます！あなたはどのパーティでも重宝される存在でしょう！";
                break;
            case "ひとみしり":
                img.src = "./img/hagurinn.png";
                img.value;
                p_tag.textContent = "はぐれメタルです！人前に出るのが苦手なあなた、そんなあなたははぐれメタルのようにレアリティの高い存在！たまには逃げずに人前に出てみよう、あなたを待っている人はきっといるはず！";
                break;
            case "いっぴきおおかみ":
                img.src = "./img/l_5743e3721c877.jpeg";
                img.value;
                p_tag.textContent = "エスタークです！一人で強さを求めがちなあなた、もっと周りを頼ってもいいんだよ！";
                break;
            case "わがまま":
                img.src = "./img/obj70.jpeg";
                img.value;
                p_tag.textContent = "ばくだんいわです！どうしても自分の意志を押し通すあなたはパーティーにとって邪魔です！今すぐ爆発してしまいましょう！"
                break;
            default:
                img.src = "./img/zombi46.jpeg";
                img.value;
                p_tag.textContent = "その性格は登録されていません！ごめんなさい！";
                break;
        }
        text.value = "";
        let delete_btn = document.createElement("div");
        console.log(delete_btn);
        delete_btn.textContent = "reset";
        delete_btn.classList.add("delete");
        li_tag.appendChild(delete_btn);
        delete_btn.addEventListener("click", function () {
            this.parentElement.remove();
            todo_list2.remove();
            window.location.reload();
        })
    }
}, { once: true })
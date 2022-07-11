<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
</head>

<body>
    <main>
        <div class="container">
            <h1>性格別ドラクエのモンスター<br>+<br>パーティでの役割診断</h1>
            <h2>性格:しゃこうてき、がんばりや、やさしい、きれもの、ひとみしり、いっぴきおおかみ、わがまま</h2>
            <form>
                <input type="text" id="input" placeholder="上記の中から性格をひらがなで入力してください">
                <img src="./img/suraimu.jpeg" alt="スライム" width="36px" height="36px" id="btn">
            </form>
            <ul class="todo-list">
                <!-- ここに要素が追加されていく -->
            </ul>
            <ul class="todo-list2">
                <!-- ここに要素が追加されていく -->
            </ul>
        </div>
    </main>
    <section>
        <h1>お問い合わせ</h1>
        <form action="confirm.php" method="POST" class="otoiawase">
            <div class="content-text">
                <label for="">ニックネーム</label>
                <input type="text" name="nickname">
            </div>
            <div class="content-text">
                <label for="">メールアドレス</label>
                <input type="text" name="email">
            </div>
            <div class="content-text">
                <label for="">お問い合わせ内容</label>
                <textarea name="content" id="" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="送信">
        </form>
    </section>
    <script src="./main.js"></script>
</body>

</html>
<template>
  <footer role="contentinfo">
    <div class="container footer">
      <div class="row">
        <div class="col">
          <div class="logo"><img src="/logo_white.png" alt="アクロスペイラ" class="pc"></div>
          <div>
            <p class="text-left">株式会社アクロスペイラ<br>
              〒103-0023<br class="pc">
              東京都中央区日本橋本町4-8-15 ネオカワイビル4F<br>
              TEL 03-6774-6541<br>
              FAX 03-6774-6548</p>
          </div>
        </div>
        <div class="col">
          <ul>
            <li>
              <dl>
                <dt>SERVICE</dt>
                <dd><a href="https://acrospera.com/service/ecsite.html" target="_blank">ECサイト構築</a></dd>
                <dd><a href="https://acrospera.com/service/app.html" target="_blank">アプリケーション開発</a></dd>
                <dd><a href="https://acrospera.com/service/web.html" target="_blank">Web制作</a></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>RECRUIT</dt>
                <dd><a href="https://saiyo-spera.com/" target="_blank">採用サイト</a></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>ABOUT</dt>
                <dd><a href="https://acrospera.com/about/" target="_blank">会社概要</a></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>CONTACT</dt>
                <dd><a href="https://acrospera.com/contact/" target="_blank">お問い合わせ</a></dd>
              </dl>
            </li>
          </ul>
        </div>
      </div><!-- /.row -->
    </div>
    <p class="Copyright">Copyright &copy; 2021 AcroSpera Co.,Ltd. , All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
  footer {
      font-size: .8rem;
      line-height: 1.5em;
      text-align: center;
      background: #00140a;
      color: #ffffff;
  }
  a {
    color: #ffffff;
  }

  footer .footer {
      padding: 33px 40px 33px;
  }

  footer .container {
      max-width: 1120px;
  }

  footer .footer .logo {
    line-height: 0;
    text-align: left;
    margin-bottom: 15px;
  }

  .container img {
      max-width: 100%;
  }

  footer .footer ul {
    display: flex;
    justify-content: flex-end;
  }

  footer .footer li {
    padding-right: 20px;
  }
  footer .footer ul li dl dt {
      font-family: 'Roboto Slab', serif;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 20px;
      padding-bottom: 20px;
      position: relative;
      letter-spacing: 1.5px;
      text-align: left;
      white-space: nowrap;
      color: #ffffff;
  }
  footer .footer ul li dl dd {
      margin-bottom: 10px;
      text-align: left;
      white-space: nowrap;
  }
  footer .footer ul li dl dt:before {
      content: "";
      position: absolute;
      bottom: 0px;
      width: 32px;
      height: 1px;
      background: #78857e;
      text-align: left;
  }
  footer .Copyright {
      background: #006b35;
      display: block;
      text-align: center;
      color: #ffffff;
      padding: 15px 0 14px;
  }
</style>

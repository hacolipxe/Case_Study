import Link from "next/Link";

function HomePage() {
  return (
    <div>
      <div class="borderbox1">
        <div class="frame">
          <p class="stage">New title</p>
        </div>

        <div class="frame2">
          <a class="header" href=" ">
            Hello World
          </a>

          <Link class=" " href="../about">
            <div class="nav">
              <a class="stage2" href=" ">
                {" "}
                New Description{" "}
              </a>
            </div>
          </Link>
          <div class="column">
            <a class="text" href=" ">
              {" "}
              +{" "}
            </a>

            <p class="text2">GÖRSEL</p>
          </div>

          <a class="btn" href=" "></a>
        </div>
      </div>

      <div class="line"></div>

      <div class="borderbox2">
        <div class="frame">
          <p class="stage">New title</p>
        </div>
        <div class="frame2">
          <div class="columnnone">
            <a class="text" href=" ">
              {" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

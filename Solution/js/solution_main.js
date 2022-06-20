
$(document).ready( function() {

    $("#header").load(".header/recipe_header.html");   
    $(".grow_box").load("content_dtail.html");  
    $("#footer").load(".footer/footer.html");
});
// let image_collection = [];
function detail(ename){
    console.log(ename);
    createLink(ename);
    // clear();
    let obj = JSON.parse(vegetable_info).data;
    console.log(obj);
    // console.log(obj[0].ename);
    
    for(let i = 0; i< obj.length; i++){
        if(ename == obj[i].ename){
            console.log(obj[i]);
            // console.log('ddd');
            let item = obj[i];
            
            // localStorage.setItem("img_collecton",image_collection);
            localStorage.setItem("kname",item.kname);
            localStorage.setItem("ename",item.ename);
            // localStorage.setItem("click", item.click);
            localStorage.setItem("imgsrc",item.imgsrc);
            localStorage.setItem("intro_img", item.intro_img);
            localStorage.setItem("level", item.level);
            localStorage.setItem("shortEx", item.shortEx);
            localStorage.setItem("water",item.water);
            localStorage.setItem("sun",item.sun);
            localStorage.setItem("plant",item.plant);
            localStorage.setItem("place",item.place);
            localStorage.setItem("step1",item.step1);
            localStorage.setItem("step2",item.step2);
            localStorage.setItem("step3",item.step3);
            // show_item(item);
            console.log(item.imgsrc);
        }
    }
    // window.open('solution_detail.html');
}

function createLink(name){
    console.log(name);
    let obj = JSON.parse(vegetable_info).data;
    let cut = String(name).substring(String(name).indexOf('S'));
    console.log(cut);
    for(let i = 0; i< obj.length; i++){
        if(cut == obj[i].imgsrc){
            console.log(obj[i]);
            // console.log('ddd');
            let item = obj[i];
            
            // localStorage.setItem("img_collecton",image_collection);
            localStorage.setItem("kname",item.kname);
            localStorage.setItem("ename",item.ename);
            // localStorage.setItem("click", item.click);
            localStorage.setItem("imgsrc",item.imgsrc);
            localStorage.setItem("intro_img", item.intro_img);
            localStorage.setItem("level", item.level);
            localStorage.setItem("shortEx", item.shortEx);
            localStorage.setItem("water",item.water);
            localStorage.setItem("sun",item.sun);
            localStorage.setItem("plant",item.plant);
            localStorage.setItem("place",item.place);
            localStorage.setItem("step1",item.step1);
            localStorage.setItem("step2",item.step2);
            localStorage.setItem("step3",item.step3);
            // show_item(item);
            console.log(item.imgsrc);
        }
    }
}

let vegetable_info = '{"data" : ['+
    '{   "kname" : "배추", "ename": "napa cabbage", "click": 0, "imgsrc": "Solution/image/category_img/leaf/napa_cabbage.png","level" : 3,"shortEx": "배추는 무, 고추, 마늘과 함께 우리나라 4대 채소 중 하나로 김치뿐 아니라 생으로 또는 말리거나 데치는 방법으로 다양한 요리에 활용된다.","water" : "씨앗 뿌린 후 40~50일경에 충분한 수분","sun" : "볕이 잘 드는 곳","plant" : "8월 말","place" : "실내재배가 가능하다.","step1" : "1) 60cm x 35cm 간격으로 심는다. <br><br> 2) 배수와 통풍이 잘 되는 곳에 심는다.","step2" : "1) 어느 정도 잎이 커지면 묶어준다.","step3" : "1) 11월 ~ 12월에 수확한다.","intro_img" : "./image/intro_img/napa_cabbage.png"},'+
    '{   "kname" : "깻잎", "ename": "sesame", "click": 0, "imgsrc": "Solution/image/category_img/leaf/sesame.png","level" : 2,"shortEx": "‘식탁 위의 명약’이라고 불릴 정도로 영양이 풍부한 깻잎은 향긋하고 부드러운 식감으로 여름철 입맛을 돋워준다. 쌈 채소, 깻잎 찜, 깻잎장아찌 등 다양한 밑반찬으로 활용되며 우리나라 밥상에서 빠질 수 없는 식재료다.","water" : "흙 표면이 건조해지면 물을 충분히 준다.","sun" : "빛을 좋아한다.","plant" : "파종 - 5월 말 ~ 6월 중순<br> 모종 - 6월 중순 ~ 7월 초","place" : "실내 재배가 쉬운편이다.","step1" : "1) 모종을 1포기나 2포기를 같이 심는다.<br><br>2. 40cm 간격으로 모종을 심는다.<br><br>3. 모종 심는 깊이는 중용하지 않고 지상으로 나온 줄기가 5cm~10cm만 나오게 심으면 된다.","step2" : "1)가끔 보이는 병충해를 잡는다.","step3" : "1) 키가 어느정도 자라면 손바닥보다 크게 자란 잎을 필요할 때 마다 수시로 잘라 수확한다.<br><br>2. 아랫쪽 잎부터 위로 수확해주고, 한꺼번에 너무 많이 수확하지 않도록 한다.","intro_img" : "./image/intro_img/sesame.png"},'+
    '{   "kname" : "청정채", "ename": "bok choy", "click": 0, "imgsrc": "Solution/image/category_img/leaf/bok_choy.png","level" : 2,"shortEx": "청경채는 중국 원산의 채소로 우리나라에서 재배해온 기간이 비교적 짧다. 서늘한 지역에서는 연중 재배가 가능하지만 특별한 시설이 없으면 한여름과 겨울에 재배하기가 힘들다. ","water" : "흙 표면이 건조해지면 물을 충분히 준다.","sun" : "볕이 잘 드는곳에 둔다.","plant" : "봄/가을","place" : "실내 재배가 쉬운편이다.","step1" : "1)배수와 통풍이 잘 되는 환경에 심어준다.<br><br>2) 서늘한 기후 좋아한다.","step2" : "1) 15cm x 20cm 간격으로 심기<br><br>2) 녹색 애벌레가 보이면 제거 해주기","step3" : "1) 심은 후 50일 후에 수확한다.","intro_img" : "./image/intro_img/bok_choy.png"},'+
    '{   "kname" : "양배추", "ename": "cabbage", "click": 0, "imgsrc": "Solution/image/category_img/leaf/cabbage.png","level" : 3,"shortEx": "동그란 공 모양의 양배추는 샐러드, 쌈 채소, 볶음요리 등에 널리 쓰이고 있다. 양배추의 비타민U는 위장병에 특효가 있으며 식이섬유가 많아 장운동을 활발히 한다. 시설재배가 이루어져 사시사철 언제든지 맛볼 수 있다.","water" : "최소 일주일에 한 번씩 준다.","sun" : "햇빛이 잘 들시 상당히 잘 자랄 수 있다","plant" : "4월 중순 ~ 5월 중순(봄) / 8월 중순 ~ 9월 중순(가을)","place" : "실내 재배가 쉬운편이다.","step1" : "1) 45~50센티 간격으로 심기<br><br>2) 심기 전에 물 흡수시켜주기<br><br>3) 모종을 심은 후 물을 적셔줍니다.","step2" : "1) 땅이 건조하지 않도록 유지한다.<br><br>2) 밑거름으로 부족하므로 웃거름을 채워준다.(모종을 심고 15일 경과된 시점에 주고, 15일 간격으로 2~3회 주기)","step3" : "1) 봄에 심었을 시 6월 하순 ~ 7월 초순에 수확한다.<br><br>2) 가을에 심었을 시 11월에 수확한다.","intro_img" : "./image/intro_img/cabbage.png"},'+
    '{   "kname" : "시금치", "ename": "spinach", "click": 0, "imgsrc": "Solution/image/category_img/leaf/spinach.png","level" : 2,"shortEx": "시금치는 비타민, 철분, 식이섬유 등 각종 영양 성분이 다량 함유된 녹황색 채소로 성장기 아이들, 여성과 임산부, 노인 등 남녀노소 모두에게 유익한 식재료이다.","water" : "흙 표면이 건조해지면 물을 충분히 준다.","sun" : "빛을 좋아한다.","plant" : "8월 말 ~ 10월","place" : "실내 재배가 쉬운편이다.","step1" : "1) 포트와 화분 표면이 평면이 되게 모종을 심는다.<br><br>2) 25cm~30cm 간격으로 심어준다.<br><br>3) 심어준 후에는 물을 뿌려준다.","step2" : "1) 파종 후 5~6주 이후 부터 간격을 넓혀주면서 솎음 수확을 할 수 있다.<br><br>2) 이른 봄 파종 시금치는 파종 후 4~5주부터 솎음수확을 할 수 있고, 가을 파종은 3~4주부터 솎음수확이 가능하다. 솎아주지 않으면 포기 사이가 좁아져 위로 많이 자라는 시금치가 된다.","step3" : "1) 20cm 이상 자라면 포기채 뽑아 수확할 수 있다.<br><br>2) 어느정도 자란 잎 줄기를 잘라 수확하면 계속해서 자라는 잎을 수확할 수 있다.","intro_img" : "./image/intro_img/spinach.png"},'+
    '{   "kname" : "머위", "ename": "coltsfoot", "click": 0, "imgsrc": "Solution/image/category_img/leaf/coltsfoot.png","level" : 4,"shortEx": "시금치는 비타민, 철분, 식이섬유 등 각종 영양 성분이 다량 함유된 녹황색 채소로 성장기 아이들, 여성과 임산부, 노인 등 남녀노소 모두에게 유익한 식재료이다.","water" : "흙이 마르지 않도록 흠뻑 준다","sun" : "그늘지고 습한곳을 좋아한다.","plant" : "3월 말~4월","place" : "실내 재배가 쉬운편이다.","step1" : "1) 캐낸 머위 뿌리에 눈을 붙여 15~20cm길이로 자른다<br><br>2) 머위 뿌리를 50cm간격으로 심는다<br><br>3) 심는 깊이는 3cm정도 흙이 덮이도록 한다(줄기나 잎을 노출시켜주어야한다)","step2" : "1)봄이 되면 포기에서는 꽃망울이 올라온다.(2년이 지난 후부터 수확을 하는것이 개체 수 늘리기에 유리)<br><br>2) 머위가 20~30cm높이로 자랐을 때 짚이나 마름 풀 등을 깔아주면 퇴비로도 쓰이고 풀이 덜 나게 한다.<br><br>3) 땅이 너무 척박하거나 매마른 경우에는 깻묵이나 퇴비를 머위 줄기 사이에 흩뿌려주면 좋다<br><br>4) 여러가지 풀이 많이 자라면 풀을 베어 그자리에 깔아준다.","step3" : "1) 머위는 봄에 돋아나는 연한잎을 수확하지만 조금 더 지나 4월말이나 5월에 머위대를 수확하기도 한다.","intro_img" : "./image/intro_img/coltsfoot.png"},'+
    '{   "kname" : "미나리",  "ename": "water parsley", "click": 0, "imgsrc": "Solution/image/category_img/leaf/water_parsley.png","level" : 2,"shortEx": "미나리는 특유의 향긋함과 부드러운 식감이 특징인 식재료다. 다양한 영양소가 풍부한 미나리는 특히 해독작용이 뛰어나 체내 중금속이나 각종 독소를 배출하는데 탁월한 효과가 있다.","water" : " 2~3일에 한번","sun" : "햇빛을 싫어한다.(그늘진 장소에서 키우기)","plant" : "8월 말 ~ 10월","place" : "실내 재배가 가능하다.","step1" : "1) 10cm x 10cm 간격으로 심기<br><br>2) 물 가득 넣어주기","step2" : "1) 흙이 마르지 않게 주의한다.","step3" : "1)심고 40여일 후 수확한다.","intro_img" : "./image/intro_img/water_parsley.png"},'+
    '{   "kname" : "상추", "ename": "lettuce", "click": 0,  "imgsrc": "Solution/image/category_img/leaf/lettuce.png","level" : 2,"shortEx": "상추는 ‘복을 싸 먹는다.’ 하여 예로부터 비타민과 무기질 등의 영양을 충족하기 위해 육류와 함께 먹는 쌈 채소로 활용되었다. 비타민C와 베타카로틴, 섬유질을 보충하고 피를 맑게 하는 작용을 한다.","water" : " 하루에 3~4번","sun" : "반그늘이나 햇빛이 잘드는 곳","plant" : "(모종)봄상추 - 4~5월/가을상추 - 9~11월","place" : "실내 재배가 쉬운편이다.","step1" : "1) 옮겨 심기 전에 물을 흠뻑 뿌리고 2~3시간 그늘에 둔다.<br><br>2) 포트에 있는 모종이 상하지 않게 옮겨 심는다.<br><br>3) 10~20cm 간격으로 심는다.<br><br>4) 심은 후 물을 뿌려준다.","step2" : "1) 겉흙이 말랐다 싶을 때 마다 물을 준다.<br><br>2) 물을 줄 때 상추 잎에는 물이 닿지 않게 한다.<br><br>3) 솎아주기(잘자라는 상추를 남겨두고 비실한 상추들을 뽑아준다.)<br><br>4) 온도가 너무 높거나 통풍이 원활하지 않게 관리한다.","step3" : "1) 수확할 떄는 바깥쪽 잎부터 수확하면 된다.<br><br>2) 줄기에 붙어있는 상추 잎부분이 남아있지 않게 한다.<br><br>3) 봄파종은 7월 전에 정리하고 가을 파종은 12월이 되기 전에 정리한다.","intro_img" : "./image/intro_img/lettuce.png"},'+
    '{   "kname" : "오이", "ename": "cucumber", "click": 0, "imgsrc": "Solution/image/category_img/fruit/cucumber.png","level" : 4,"shortEx": "오이는 박과의 한해살이 덩굴식물로, 많은 품종이 개발되어 전 세계적으로 과일로 재배되고 있다. 학명은 \'Cucumis sativus\'이며, 인도가 원산지이다.","water" : " 여름 - 매일 / 겨울 - 3~4일","sun" : "광합성을 위한 적당한 빛","plant" : "파종 - 5~6월 / 모종 - 6~7월", "place" : "야외 텃밭 권장","step1" : "1) 오이모종을 심기 전 오이지지대를 우선 설치한다.<br><br>2) 오이 모종은 너무 깊게 심으면 활착이 늦어지므로 폿트 지면이 지면보다 다소 높거나 같은 깊이로 심는다.<br><br>3) 여러개를 심을 경우 간격은 30cm정도의 간격을 둔다.<br><br>4) 심을 때 모를 눌러 심으면 병에 걸리기 쉬우므로 폿트 주위로만 흙을 잘 모아주고 누르거나 폿트위로 흙을 덮지 않도록 한다.","step2" : "1) 오이는 건조하면 기형과가 많이 생기기 때문에 흙이 촉촉하면 물을 주지 않고 건조할 때 습기가 느껴지지 않을 정도로 물을 뿌린다.<br><br>2) 뻗어나는 오이줄기를 오이 지지대에 집게로 고정시킨다.<br><br>3) 곁순제거(꽃이나 열매가 지나치게 많으면 영양분이 부족하여 건실하게 자랄 수 없게 되는걸 방지하기 위하여 줄기에서 뻗어 나오는 가지를 줄여 주거나 꽃과 열매의 개체수를 줄이기 위해 생장점이 있는 새순을 잘라 제거하는 것)","step3" : "1) 오이는 6월 초부터 8월까지 수확할 수 있다.","intro_img" : "./image/intro_img/cucumber.png"},'+
    '{   "kname" : "방울토마토", "ename": "cherry tomato", "click": 0, "imgsrc": "Solution/image/category_img/fruit/cherry_tomato.png","level" : 3,"shortEx": "한 입에 쏙 들어오는 방울토마토가 입안에서 톡 터질 때면 기분까지 상큼해진다. 일반 토마토보다 당도가 높고 영양성분은 더 풍부하게 들어가 있어 주재료로 손색없지만 귀엽고 앙증맞은 모습으로 각종 요리의 장식용으로 사랑받고 있다.","water" : "너무 건조하거나 과습하지 않도록 관리","sun" : "빛을 좋아한다.","plant" : "파종 - 2월 중순/모종 - 4월 말 ~ 5월 중순","place" : "실내재배가 가능하다.", "step1" : "1) 30~50cm 정도의 깊이를 만들어 주면 좋다.<br><br>2) 심기 전 화분에 물을 뿌려준다.<br><br>3) 포트에서 모종을 뽑아내고, 화분의 흙을 호미로 조금 파낸 다음 포트 안에 있을 때 흙에 잠긴 부분만큼 묻히도록 심는다.<br><br>4) 10cm 간격으로 심어준다.<br><br>5) 모종은 해거름에 심고 물을 주는 것이 좋다.","step2" : "1) 심을 장소에 미리 지주를 고정시켜 두고 심는 것이 좋다.<br><br>2) 6월이 되면 일주일에 한 번 정도 줄기를 손질해주어야 한다. 곁가지도 따주고 지주에 묶어주는 작업을 해야 한다.<br><br>3) 어느 정도 잎이 누렇게 되면 일반 가위로 약해진 잎을 달고 있는 잎줄기를 잘라준다.<br><br>4) 첫 번째 웃거름은 아주 심고 2개월쯤 지나 처음 열린 열매가 익어갈 무렵에 토마토 줄기에서 조금 떨어진 곳에 작은 구덩이를 10㎝ 정도 깊이로 파고 만들어둔 거름을 두주먹 넣고 흙을 덮어둔다. 이후 약 1개월 간격으로 두둑의 다른 쪽을 파서 웃거름을 계속 준다.<br><br>5) 첫꽃을 따준다.","step3" : "1) 꽃이 피었던 자리에 열매가 맺는다. 빨갛게 익으면 수확한다.","intro_img" : "./image/intro_img/cherry_tomato.png"},'+
    '{   "kname" : "가지", "ename": "egg plant", "click": 0, "imgsrc": "Solution/image/category_img/fruit/egg_plant.png","level" : 3,"shortEx": "가지는 동서양을 막론하고 다양한 음식에 활용되는 채소로, 특유의 부드러운 식감이 특징이다. 가지의 보라색 색소인 ‘안토시아닌’은 강력한 항산화제로 암을 예방하고 콜레스테롤을 낮춰주는 등 우리 몸에 이로운 효과를 가져다준다.","water" : "하루 3~5번", "sun" : "강한 빛을 좋아함","plant" : "파종 - 4월 ~ 5월/모종 -  4월 말 ~ 5월 중순","place" : "야외 텃밭 권장","step1" : "1) 포트위에 흙이 덮히지 않을 정도로 포트를 땅에 묻는다.<br><br>2) 모종과 상단 흙이 수평이 되게 심는다.<br><br>3) 심는 간격은 40~60cm 정도록 간격을 둔다.<br><br>4) 묻은 후에는 물이 흥건하게 될 때까지 물을 뿌린다.","step2" : "1) 겉순제거(꽃이나 열매가 지나치게 많으면 영양분이 부족하여 건실하게 자랄 수 없게 되는걸 방지하기 위하여 줄기에서 뻗어 나오는 가지를 줄여 주거나 꽃과 열매의 개체수를 줄이기 위해 생장점이 있는 새순을 잘라 제거하는 것)<br><br>2) 20일 간격으로 웃거름 준다.<br><br>3) 장마철에 넘어지지 않도록 지지대에 세워서 묶어둔다.<br><br>4) 병충해가 보일 때마다 제거한다.","step3" : "1) 여름에는 꽃이 핀 후 20~25일 후 수확하고, 가을에는 25~30일 정도 지난 후 수확한다. 하지만 어느정도 크기가 되었다 싶으면 수확하면 좋다.","intro_img" : "./image/intro_img/egg_plant.png"},'+
    '{   "kname" : "옥수수", "ename": "corn", "click": 0, "imgsrc": "Solution/image/category_img/fruit/corn.png","level" : 2,"shortEx": "밀, 벼와 함께 세계 3대 식량 작물 중 하나인 옥수수는 전 세계적으로 널리 재배되고 이용되는 식재료로 국내에서는 찰옥수수, 단옥수수, 초당옥수수 등의 품종이 주로 유통되며, 주식과 간식으로 이용되고 있다.","water" : " 매일 아침/저녁","sun" : "강한 빛을 좋아함","plant" : "4, 5월~","place" : "야외 텃밭 권장","step1" : "1) 70cm 폭에 25cm 간격으로 2알씩 심는다.<br><br>2) 키가 15cm정도 자라면 1포기만 남기고 솎아주어 튼튼하게 한다.<br><br>3) 심은 후 물을 조금씩 뿌려줍니다","step2" : "1) 50cm정도 자라면 눈대중으로 잎이약간 연노란색이 되면 비료가 부족한 증상(원예용 복합비료를 1~2cm간격에 작은 알갱이 1개정도) 흩어 뿌린다<br><br>2) 옮겨심은 모종의 뿌리가 확실히 내리면(약 일주일)포기 사이에 거름을 놓는다.","step3" : "1) 암술 머리가 갈색으로 마를 때 수확하여 바로 수확한다.","intro_img" : "./image/intro_img/corn.png"},'+
    '{   "kname" : "고추","ename": "peper", "click": 0, "imgsrc": "Solution/image/category_img/fruit/peper.png","level" : 3,"shortEx": " 매운맛을 내는 대표적인 향신 채소인 고추는 풋고추, 청양고추, 꽈리고추, 아삭이  고추 등 종류에 따라 매운 정도와 용도가 매우 다양하다. 고추는 비타민 C와 캡사이신이 풍부해 각종 질병 예방은 물론 다이어트에도 도움을 준다.","water" : "흙 표면이 건조해질 때마다","sun" : "빛을 좋아함","plant" : "파종 - 2월 중순/모종 - 4월 말 ~ 5월 중순","place" : "실내재배가 쉬운 편이다.","step1" : "1) 모종에 물을 흠뻑 주어 포트 안에 있는 고추 모종을 감싸는 흙이 젖도록 만든 후 2~3시간 후에 뽑는다.<br><br>2) 40cm 간격으로 모종을 심는다.<br><br>3) 심은 후 물에 흥건해질 때까지 물을 뿌린다.","step2" : "1) 2~3갈래로 갈라지는 첫 번째 줄기 아래에서 생기는 새로운 줄기는 빨리 따준다.<br><br>2) 고추 옆에 말뚝을 박아 묶어주거나 고추 2~3포기 사이에 말뚝을 박아 줄로 고정시켜야 한다. 두 번째 줄 매기는 첫 번째 줄 매기를 하고 난 후 3주 정도 지나서 해주어야 한다.<br><br>3) 웃거름은 아주 심고 2개월 정도 지나 풋고추가 많이 달릴 때 주는 것이 좋다. 웃거름은 고추포기에서 15㎝ 정도 떨어진 곳의 두둑을 호미로 10㎝ 정도 파내고 그 안에 거름을 한두 주먹 넣고 흙을 살짝 덮어둔다.<br>4. 벌레가 보일 때마다 잡아준다.<br><br>5) 풀이 많이 돋아나 고추의 성장이 방해를 받을만하면 낫으로 풀을 베어 그 자리에 깔아준다. 고추를 기르면서 2~3번 풀을 정리해주는 수고를 해야 한다. 6월 중순에 한 번 정도 정리를 해주면 이후는 고추가 자라면서 풀이 조금 덜 나게 된다.","step3" : "1) 꽃이 핀 후 15일 전 후로 풋고추를 수확할 수 있다.","intro_img" : "./image/intro_img/peper.png"},'+
    '{   "kname" : "강낭콩", "ename": "pea", "click": 0, "imgsrc": "Solution/image/category_img/fruit/pea.png","level" : 2,"shortEx": "쌍떡잎식물 장미목 콩과의 한해살이풀.","water" : " 흙 표면이 건조해지면 물을 충분히 준다.","sun" : "빛을 좋아한다.","plant" : "파종 - 4~5월","place" : "야외 텃밭 권장","step1" : "1) 심기 전 화분의 흙을 적신다.<br><br>2) 손가락으로 두마디 정도의 깊이에 씨앗 1~3개를 넣어준다.<br><br>3) 구멍 덮는다.","step2" : "1) 다른 콩과는 다르게 생육에 질소질 거름이 필요하므로 밑거름으로 퇴비를 조금 넣어주는 것이 좋다. 대신에 웃거름은 주지 않는다.<br><br>2) 여유가 되면 줄기를 뻗는 풀들을 한 번 정도 걷어내준다.<br><br>3) 저온에서는 개화가 불량해지고 고온에서는 꽃가루형성이 저해되므로 가능한 한 생육 적온 범위에서 재배를 해야한다.","step3" : "1) 여름 장마철 이전에 수확한다.<br><br>2) 꼬투리를 수확해서 이용하는 경우는 살충제를 살포하면 반드시 일정기간이 경과한 후에 수확을 해야 한다.","intro_img" : "./image/intro_img/pea.png"},'+
    '{   "kname" : "토마토", "ename": "tomato", "click": 0, "imgsrc": "Solution/image/category_img/fruit/toamto.png","level" : 3,"shortEx": "토마토는 세계적으로 5,000개 이상의 품종이 재배될 정도로 식재료로서의 인기가 높은 채소이다. 토마토는 ‘리코펜’ 성분이 풍부하여 노화를 방지하고, 암 예방에 효능이 있다.","water" : " 7~10일마다","sun" : "볕이 잘 드는 곳","plant" : "2월 ~ 3월","place" : "야외 텃밭 권장","step1" : "1) 모종을 심은 후 물을 약하게 주기<br><br>2) 물을 세게 주면 뿌리가 보일 수 있음", "step2" : "1) 곁순을 없애고 원줄기만 기르기<br><br>2) 2m정도의 지주 세워주기<br><br>3) 웃거름 주기","step3" : "1) 6월 ~ 7월 사이에 잘 익은 토마토를 수확한다.","intro_img" : "./image/intro_img/tomato.png"},'+
    '{   "kname" : "딸기",  "ename": "strawberry", "click": 0, "imgsrc": "Solution/image/category_img/fruit/strawberry.png","level" : 4,"shortEx": "딸기는 쌍떡잎식물의 이판화군 장미목 장미과의 여러해살이풀 혹은 그 열매이다.","water" : " 매일 한번 씩","sun" : "서늘한 기온","plant" : " 4월~/ 9월~","place" : "야외 텃밭 권장","step1" : "1) 두둑의 폭이 1m 높이가 10㎝ 정도 되게 준비한다.<br><br>2) 준비된 밭에 딸기 모종을 심을 때는 30㎝ 간격으로 사진과 같이 딸기 포기의 중심부(크라운이라 부름)가 땅 위로 보이게 심는다. 깊게 심지 않는 것이 좋다.","step2" : "1) 서늘한 기후를 좋아하는 딸기는 10월부터 12월 중순까지는 자란다.<br><br>2) 겨울에도 어느 정도 자라지만 한겨울에는 잎이 거의 말라버린다. 그러다 봄기운이 도는 3월 말이 되면 하루가 다르게 성장한다.<br><br>3) 4월 초순에는 꽃망울이 보이다 중순부터 꽃을 피운다. 하얀색의 꽃이 지면서 작은 딸기가 자라난다.<br><br>4) 5월의 따뜻한 햇살이 비치면 딸기는 빨간색을 띠면서 익어간다.<br><br>5) 꽃이 피기 시작하면 딸기 포기의 중심에서 새끼를 치기 위한 런너라는 줄기를 계속 길러낸다. 이 런너가 땅에 닿아 뿌리를 내리면 새로운 개체의 딸기가 된다.","step3" : "1) 딸기꽃이 지고 시간이 흐르면 딸기의 몸통이 커지고 빨간색으로 익으면 수확한다.","intro_img" : "./image/intro_img/strawberry.png"},'+
    '{   "kname" : "애호박", "ename": "squash", "click": 0, "imgsrc": "Solution/image/category_img/fruit/squash.png", "level" : 5,"shortEx": "덜 자란 어린 호박으로, 예로부터 우리 식단에 많이 올라 친숙한 채소이다. 소화흡수가 잘 되고, 치매예방과 두뇌개발의 효능이 있다. 찌개류와 전, 볶음, 무침, 죽 등 쓰임새가 다양하다.","water" : " 다습에 약하므로 물을 너무 많이 주지 않는다.","sun" : "빛을 좋아함","plant" : "파종- 4월 중순 ~ 5월 중순/모종- 5월","place" : "야외 텃밭 권장","step1" : "1) 옮겨심기 전 뿌리가 흠뻑 젖도록 2~3일쯤 잔뿌리가 내릴 때까지 물을 준다.<br><br>2) 10~20cm 간격으로 심어준다.","step2" : "1) 호박이 많이 수확되는 8월 초에 호박 구덩이 주변을 호미로 조금 파내고 퇴비를 넣고 흙을 덮어둔다.<br><br>2) 뻗은 줄기가 유인용 나무를 지나 아무 데로 자라면 줄기의 끝을 들어 다시 주변의 유인용 나무줄기를 따라 자라도록 해주어야 한다.<br><br>3) 키가 20cm가 넘어서는 덩쿨형 작물이기때문에 지주대와 줄을 쳐주면 좋다. 애호박 덩쿨이 줄을 타고 올라가게 한다.","step3" : "1) 꽃이 피고 7~10일 정도 후면 수확이 가능하다.<br><br>2) 인공수분 한 수꽃 혹은 아주 작은 애호박이 달린 암꽃을 요리해 먹기도 한다.<br><br>3) 어린 애호박 잎을 따서 데쳐 먹으면 일품이다.","intro_img" : "./image/intro_img/squash.png"},'+
    '{   "kname" : "파프리카", "ename": "paprika", "click": 0, "imgsrc": "Solution/image/category_img/fruit/paprika.png","level" : 3,"shortEx": "피망과 혼동하기 쉬운 파프리카는 피망보다 단맛이 강하고 과육이 많게 개량한 채소다. 아삭거리는 식감에 달콤한 맛과 형형색색의 색깔이 특징이며, 비타민 함유량이 많아 항암 효과와 피로 해소에 효과적이다.","water" : " 흙이 마르지 않을 정도로만","sun" : "고온을 좋아함","plant" : "2월 초","place" : "실내재배가 가능하다.","step1" : "1) 배수와 통풍이 잘 되는 곳에 심어준다.","step2" : "1) 20cm가 넘으면 지주대 세워준다.<br><br>2) 첫번째 꽃이 피면 꽃 아래의 곁가지 2개를 제외한 나머지를 제거한다.","step3" : "1) 6월 하순 ~ 8월 사이에 수확한다.","intro_img" : "./image/intro_img/paprika.png"},'+
    '{   "kname" : "고구마", "ename": "sweet potato", "click": 0, "imgsrc": "Solution/image/category_img/foot/sweet_potato.png","level" : 3,"shortEx": "고구마는 예로부터 각종 요리와 간식으로 사용되어왔다. 달콤한 맛뿐만 아니라 풍부한 식이섬유와 칼륨으로 장 활동을 개선하고, 체내 나트륨 배출을 돕는 영양 만점 식재이다.","water" : " 일주일에 한번", "sun" : "햇빛 대신 땅 속 열기로 싹을 키움", "plant" : "씨고구마 - 3월 ~ 4월/모순 - 5월 ~ 6월","place" : "야외 텃밭 권장.","step1" : "1) 멀칭 비닐을 씌운다.<br><br>2) 파종기나 막대기를 사용해서 고구마순이 비닐을 뚫고 들어가게 한다.<br><br>3) 심을 때는 흙속으로 3~5cm정도만 들어가게 심는다.<br><br>4) 고구마 순이 바깥으로 2~3마디 정도 나오게 심는다.<br><br>5) 고구마 심는 간격은 30~40cm 간격이 적당하다.","step2" : "1) 줄기가 많이 자라는 8월에 고구마 줄기를 한번 정도 젖혀주는 것이 좋다.","step3" : "1) 땅 위로 뻗은 줄기를 모두 걷어낸다. (고구마 줄기로 고구마 줄거리 나물을 먹을 수 있다.)<br><br>2) 호미로 하나씩 상처가 나지 않게 캐낸다.<br><br>3) 고구마 줄기를 처리하려면 수확 후 1~2주 있다가 잘게 썰어 밭에 깔아주면 퇴비처럼 변한다.","intro_img" : "./image/intro_img/sweet_potato.png"},'+
    '{   "kname" : "당근", "ename": "carrot", "click": 0, "imgsrc": "Solution/image/category_img/foot/carrot.png","level" : 2,"shortEx": "주홍빛 색을 가진 당근은 식재료로써 다양한 쓰임새는 물론 캐릭터로도 활용될 정도로 친숙한 채소이다. ‘비타민 A의 황제’라고 불리는 당근은 다양한 영양소를 함유하고 있고, 특유의 향과 색으로 널리 활용된다.","water" : " 흙 표면이 건조해졌을 때 물을 주면 좋다. ","sun" : "빛을 좋아함", "plant" : "7월 파종","place" : "실내재배가 가능하다.","step1" : "1) 25~40cm 정도의 깊이를 만들어 주면 좋다.(옮겨심으면 뿌리가 제대로 자라지 못한다.)<br><br>2) 심기 전 화분에 물을 뿌려준다.<br><br>3) 흙에 0.5 ~ 1.5cm 깊이로 얕게 심는다.<br><br>4) 1~2㎝ 간격에 씨앗이 하나씩 놓이게 줄뿌림한다.","step2" : "1) 주기적으로 비료를 주면 좋다.<br><br>2) 진딧물이 생기지 않도록 자주 확인하고 진딧물의 수가 늘어나면 살충제를 사용한다.","step3" : "1) 뿌리가 굵어져 땅위로 보일 정도가 되면, 뿌리 채 뽑아 수확한다.<br><br>2) 파종적기보다 너무 빨리 파종하면 추대하거나 착색이 불량해지므로 주의한다.","intro_img" : "./image/intro_img/carrot.png"},'+
    '{   "kname" : "우엉", "ename": "burdock", "click": 0, "imgsrc": "Solution/image/category_img/foot/burdock.png","level" : 5,"shortEx": "김밥 속에 빠지지 않고 들어가는 재료인 우엉은 고소한 맛에 쫄깃한 식감을 가지고 있으며, 식이섬유가 풍부하고 혈당 조절 및 콜레스테롤 배출 효과가 뛰어난 식재료이다.", "water" : "일주일에 한번 씩 많이.","sun" : "적당한 햇빛","plant" : "4월, 5월~","place" : "야외 텃밭 권장","step1" : "1) 우엉은 흙이 부드럽고 깊은 곳에 재배해야 캐낼 때 수월하다.<br><br>2) 자신의 밭 중에 제일 파내기 쉬우면서 물 빠짐이 좋은 곳에 심는 것이 핵심이다.<br><br>3) 잎줄기가 다 자라면 60~70㎝ 정도가 되므로 이를 감안해 주변에 다른 채소를 가꾸도록 한다.<br><br>4) 1㎡당 4㎏ 정도의 퇴비와 깻묵 4컵(800g) 정도를 넣고 되도록 깊게 일구어 둔다. 두둑은 따로 만들지 않아도 되지만 물 빠지는 고랑은 만들어둔다.","step2" : "1) 씨앗은 사방 30㎝에 5~6개를 넣는다. 씨앗을 넣고 흙덮기는 아주 얇게 해주는 것이 좋다. 빛을 받아야 싹이 잘 트는 특성이 있으므로 씨앗을 얕게 묻는다.<br><br>2) 우엉은 저온에 잘 견디지만 싹이 트려면 20℃ 정도가 되어야 한다. <br><br>3) 떡잎이 발생할 때부터 상황을 보면서 솎아주어야 한다. 최종적으로 한곳에 한 포기의 우엉이 자라는 환경으로 만든다.","step3" : "1) 7월 이후에 캐서 수확한다. 그런데 생각보다는 수확이 어렵다. 한 포기를 캐내는 것이 어렵기 때문에 한 줄 단위로 캐야 한다. ","intro_img" : "./image/intro_img/burdock.png"},'+
    '{   "kname" : "감자", "ename": "potato", "click": 0, "imgsrc": "Solution/image/category_img/foot/potato.png","level" : 3,"shortEx": "쌀, 밀, 옥수수와 함께 4대 식량 작물 중 하나로 꼽히는 감자는 구황작물이면서 부식의 재료로 다양하게 이용되어온 친숙한 식품이다.","water" : " 3일에 한번씩","sun" : "빛을 좋아함","plant" : "3월 중순 ~ 4월 상순","place" : "실내재배가 쉬운 편이다.","step1" : "1) 싹이 난 감자를 화분 10cm~15cm 깊이에 싹이 위쪽을 보도록 묻는다.<br><br>2) 20cm~30cm 간격으로 심는다.<br><br>3) 심은 후 물을 조금씩 뿌려준다.","step2" : "1) 감자를 크게 키워야 할 필요가 있을 때는 실한 감자 싹을 한두 개만 남기고 나머지는 제거해주는 것이 좋다.<br><br>2) 얕게 묻힌 감자가 땅 위로 드러나 햇빛을 보게 되어 파랗게 변하는 경우가 있다. 이 현상을 막으려면 고랑으로 쓸려 내려간 흙을 두둑 위로 올려 주는 북주기가 필요하게 된다.<br><br>3) 감자꽃을 따주어야 감자에 영양이 집중되어 알이 굵어진다.","step3" : "1) 땅이 많이 갈라진 곳이나 약간씩 말라가는 줄기 밑의 감자 중에 굵은 것은 더듬어 캔다.","intro_img" : "./image/intro_img/potato.png"},'+
    '{   "kname" : "토란", "ename": "taro", "click": 0, "imgsrc": "Solution/image/category_img/foot/taro.png","level" : 3,"shortEx": " ‘알토란같다’는 말의 주인공인 토란은 알줄기 외에도 줄기와 잎까지 모두 먹을 수 있으며, 탄수화물과 단백질, 무기질뿐만 아니라 비타민 C도 다량 함유되어 있다. 모양은 감자와 비슷하지만 쫄깃하고 부드러운 식감이 특징이다.","water" : "최대한 많이 주면 좋음","sun" : "햇빛을 좋아함","plant" : "4월, 5월~","place" : "야외 텃밭 권장","step1" : "1) 지난해 수확해 얼지 않도록 저장한 씨토란을 준비하거나, 처음 재배하는 경우라면 전통 5일장에 들러 구입한다.<br><br>2) 씨앗은 크고 주변에 곰팡이가 없는 것을 골라야 한다. 겨울에 보관이 잘못 되어 상한 것은 골라낸다.<br><br>3) 밭의 귀퉁이나 경계부의 두둑에 몇 포기 심어둔다.","step2" : "1) 토란은 파종 후 상당한 기간이 지나야 싹이 나온다. 보통은 1개월이 지나야 싹을 틔우고 늦게는 6주 정도 지나야 한다.<br>2) 토란은 열대가 고향인 식물로 고온을 좋아한다. 우리나라에서는 고온기가 되는 5월이 지나야 싹이 튼다.<br><br>3) 파종 2개월이면 6월 중순이 되므로 비도 자주 오고 기온도 높아져 토란이 좋아하는 날씨가 된다.<br><br>4) 8월 말이 되면 줄기의 아래에는 아들 토란이 생기고 손자 토란까지 생긴다. 큰 토란을 수확하려면 이때 아들 포기의 밑동을 잘라 주고 북을 주면 가늘고 긴 토란이 생기는 현상이 준다.<br><br>5) 9월 말이 되면 수확시기가 가까워짐을 알 수 있다. 아랫잎이 약간 누렇게 되는 것이 보이기도 한다.","step3" : "1) 토란을 전문적으로 재배하는 농가에서는 8월 이후 굵은 줄기를 수시로 수확해 껍질을 벗겨 말려둔다.<br><br>2) 작은 규모의 텃밭은 포기 수가 많지 않아 10월에 한꺼번에 줄기를 베어 수확하는 것이 좋다.","intro_img" : "./image/intro_img/taro.png"},'+
    '{   "kname" : "순무", "ename": "turnip", "click": 0, "imgsrc": "Solution/image/category_img/foot/turnip.png","level" : 3,"shortEx": "아삭하고 알싸한 맛이 일품인 순무는 일반 무와 달리 단맛이 난다 하여 ‘과일 무’라고도 불린다. 항염, 항암작용이 뛰어난 영양성분을 다량 함유하고 있어 새로운 슈퍼 푸드로 떠오르고 있다.","water" : " 흙이 건조해지면 주기/너무 건조하거나 과하지 않게","sun" : "볕이 잘 드는 / 반그늘", "plant" : " 3월 ~ 6월 / 9월 ~ 10월","place" : "야외 텃밭 권장","step1" : "1) 씨앗의 두 배 정도 깊이에 심는다.<br><br>2) 배수와 통풍이 잘 되는 환경에 심는다.","step2" : "1) 20cm x 25cm 간격으로 심는다.<br><br>2) 건조하면 뿌리가 갈라질 수 있다.", "step3" : "1) 6월 / 10월 사이에 수확할 수 있다.","intro_img" : "./image/intro_img/turnip.png"},'+
    '{   "kname" : "무", "ename": "radish", "click": 0, "imgsrc": "Solution/image/category_img/foot/radish.png","level" : 3,"shortEx": " 한국에서 가장 많이 사용하는 4대 채소 중 하나인 무는 김치뿐 아니라 나물, 국, 조림 등 다양한 메뉴에 다양한 조리법으로 사용할 수 있다. ","water" : "일주일에 한번 정도 많이 줌","sun" : "서늘한 기후","plant" : " 8~9월","place" : "야외 텃밭 권장","step1" : "1) 준비된 밭에 30~40㎝의 줄 간격으로 줄뿌림한다.<br><br>2) 호미로 파종 골을 만들고 골의 중간에 무 씨앗을 2~3㎝ 간격에 한 알씩 넣는다.<br><br>3) 5㎜ 정도로 가볍게 흙을 덮어준 다음 물을 흠뻑 뿌려준다.<br><br>4) 파종 후 한랭사를 씌우면 8월 중순의 무더위를 약간이라도 완화시켜줄 수 있어 재배가 훨씬 쉬워진다.","step2" : "1) 파종 후 4~5일이 지나면 떡잎이 나오고, 또 며칠 더 있으면 본잎이 떡잎 사이에서 자라기 시작한다.<br><br>2) 기르기로 따지면 무는 배추와 비슷한 난이도인데, 재배시기만 잘 선정하면 누구나 어느 정도의 성과를 올릴 수 있는 작물이다.<br><br>3) 파종 후 30일 정도 지나면 솎아서 열무처럼 이용할 수 있다.<br><br>4) 기간이 지남에 따라 계속 솎아주어 무의 간격이 15~20㎝ 정도 되도록 한다.<br><br>5) 싹이 터서 자라는 초기에는 서로 경쟁적으로 크는 것이 좋으므로 조기에 솎음 간격을 너무 넓히지 않는 것이 좋다.<br><br>6) 파종 3주 정도 되었을 때 꼼꼼하게 풀을 정리해주면 무가 먼저 성장해 그늘을 만들면서 풀이 자라는 것을 억제한다.<br><br>7) 웃거름을 주기 위해서는 우선 무 파종 골의 간격을 충분히 넓게 잡는다.30㎝ 이상이면 좋다.","step3" : "1) 파종 3주 이후부터 솎음수확이 가능하다. 솎아서 겉절이를 담거나 데쳐서 나물 또는 시래기로 이용하면 좋다. 파종 2개월 정도 지나면 뿌리를 뽑아 이용해도 된다.","intro_img" : "./image/intro_img/radish.png"},'+
    '{   "kname" : "양파","ename": "onion", "click": 0, "imgsrc": "Solution/image/category_img/stem/onion.png","level" : 1,"shortEx": "양파는 매운맛을 내는 성분인 ‘알리신’을 함유하고 있어 맵고 단 맛이 나고, 항산화 작용과 혈중 콜레스테롤 수치를 낮춰주는 효능을 가지고 있다.","water" : " 흙 표면이 건조해지면 물 주기","sun" : "볕이 잘 드는 곳","plant" : " 9월","place" : "실내재배가 쉬운편이다.","step1" : "1) 20cm x 25cm 간격으로 심는다.<br><br>2) 거름을 많이 필요로 한다.","step2" : "1) 잘 자랄 때까지 기다린다.","step3" : "1) 5월 ~ 6월 중순에 수확할 수 있다.","intro_img" : "./image/intro_img/onion.png"},'+
    '{   "kname" : "파", "ename": "green onion", "click": 0, "imgsrc": "Solution/image/category_img/stem/green_onion.png","level" : 1,"shortEx": "뿌리부터 잎, 줄기까지 버릴 것 하나 없이 활용도가 높은 대파는 우리나라 음식에서 빼놓을 수 없는 향신 채소 중 하나로, 면역력 강화와 체내 콜레스테롤 조절에 효과적인 식재료이다.","water" : "4일에 1번정도","sun" : "햇빛이 잘 비치는 곳", "plant" : "4, 5월~","place" : "실내재배가 쉬운편이다.","step1" : "1) 미리 만들어둔 본밭을 호미로 골을 10㎝ 정도로 깊게 줄 긋듯이 판다.<br><br>2) 골과 골 사이는 나중에 북돋아주기 좋게 호미 길이보다 약간 길게(50~70㎝) 간격을 준다. 골은 동서 방향으로 해서 파가 햇빛을 잘 받도록 해준다.<br>* 한 뼘 정도로 자란 파를 골에다 옮겨심을 때는 북쪽을 향해서 약간 눕혀 심는다. 파는 조금 서늘하게 해주는 게 좋기 때문이다.","step2" : "1) 눕혀 심은 뒤 따로 흙을 덮어주지 않아도 일주일쯤 지나면 알아서 스스로 똑바로 일어선다.<br><br>2) 심을 때는 골을 따라 줄지어 심어도 되고, 간격을 띄워서 심을 때는 약 5㎝ 정도로 해주고 덜 자란 것은 세 묶음씩 심는다.<br><br>3) 파가 똑바로 일어서면 북주기를 하는데, 퇴비와 함께 흙을 파의 하얀 밑 부분까지 덮어준다.<br><br>4) 북주기를 잘 해주어야 파가 잘 자라는데, 수확할 때까지 두세 번 정도 해주면 충분하다.","step3" : "1) 파는 제대로 자랐으면 그때그때 필요한 만큼 거두어 쓰면 된다.","intro_img" : "./image/intro_img/green_onion.png"},'+
    '{   "kname" : "부추", "ename": "chives",  "click": 0, "imgsrc": "Solution/image/category_img/stem/chives.png","level" : 2,"shortEx": "부추는 우리 몸의 양기를 돋우는 따뜻한 성질을 가진 채소다. 각종 무기질과 비타민을 풍부하게 함유하고 있어 노화를 방지하고 각종 성인병을 예방한다. 주로 생채, 김치, 전 등으로 활용한다.","water" : "아침에 해뜨기 전","sun" : "햇빛이 잘 비치는 곳","plant" : "4, 5월~","place" : "실내재배 쉬운편이다.<br>(물 빠짐이 좋은 곳)","step1" : "1) 부추 종자를 파종하고 2~3개월이 지나면 부추 모종의 본잎이 4장, 키가 15㎝ 정도 된다.모두 캐내어 본밭에 옮겨심기를 한다.<br><br>2) 머위 뿌리를 50cm간격으로 심는다.<br><br>3) 본밭은 밑거름을 미리 넣어 잘 일구어 놓는다. 부추는 한 번 아주심기하면 몇 년을 그 자리에서 자라야 하므로 밑거름을 조금 많이 넣어둔다.<br><br>4) 퇴비를 1㎡당 4㎏ 정도, 깻묵을 1㎏ 정도 넣어 밭을 일구고 2주 정도 지나서 아주심기를 한다.<br><br>5) 2~3㎝ 간격에 하나씩 부추 모종을 심고, 줄 간격은 20~30㎝ 정도로 유지한다.<br><br>6) 모종의 잔뿌리가 많이 잘려나가지 않게 조심스럽게 파낸다. 모종이 땅에 묻혀 있는 정도의 깊이로 묻을 수 있게 파종 골을 8~10㎝ 깊이가 되게 파낸다. 파낸 골에 모종을 하나씩 두는데 2~3㎝ 간격으로 한다. 흙을 덮고 물을 흠뻑 뿌려준다.","step2" : "1) 아주심기가 끝나고 나면 축 처진 모습으로 2주 정도를 보낸다. 그러다가 서서히 줄기가 세워지고, 잎이 생기를 띠게 된다.<br><br>2) 아주 심고 2개월이 지나면 빠른 것은 벌써 뿌리가 둘로 나누어진다.<br><br>3) 잘 자란 부추는 30㎝도 넘는다. 아주 심고 2개월이 지나면 9월의 선선한 바람이 불기 시작한다.<br><br>4) 위로 돋아난 줄기를 모두 베면 다음 번에 자라는 보드랍고 연한 부추를 즐길 수 있다. 이때까지는 수확을 하지 말고 그냥 두어 뿌리의 충실을 기한다.","step3" : "1) 부추는 자라는 대로 수확이 가능하다. 키가 20㎝ 이상이 되면 필요한 만큼 베어 이용한다.","intro_img" : "./image/intro_img/chives.png"},'+
    '{   "kname" : "샐러리", "ename": "salary",  "click": 0, "imgsrc": "Solution/image/category_img/stem/salary.png","level" : 2,"shortEx": "채소 ·과일 ·육류 제품을 골고루 섞어 마요네즈나 드레싱으로 간을 맞추어 먹는 서양음식.","water" : "흙 표면이 건조할 때(수분 유지 주의)","sun" : "볕이 살짝 드는/반 그늘","plant" : "3월 ~ 4월","place" : "실내재배가 가능하다.","step1" : "1) 배수와 통풍이 잘 되는 곳에 심는다.<br><br>2) 모종이 부러지는 것을 방지하기 위해 깊게 심는다.","step2" : "1) 20cm x 25cm 간격으로 심는다. <br><br>2) 웃거름을 준다.","step3" : "1) 6월 하순 ~ 7월 하순 사이에 수확할 수 있다.","intro_img" : "./image/intro_img/salary.png"},'+
    '{   "kname" : "아스파라거스", "ename": "asparagus", "click": 0, "imgsrc": "Solution/image/category_img/stem/asparagus.png","level" : 3,"shortEx": "고급 채소로 통하는 아스파라거스는 씁쓰름하면서도 담백한 맛과 아삭한 식감이 특징으로 생으로 먹거나 데치기, 굽기, 튀김 등의 조리법을 통해 샐러드 등 다양한 메뉴에 활용되고 있다.","water" : "겉흙이 말랐을때 흠뻑(겨울 x)","sun" : "햇빛이 잘 비치는 곳","plant" : "4, 5월~","place" : "실내재배가 쉬운편이다.","step1" : "1) 준비된 두둑에 호미로 파종 골을 1㎝ 깊이로 죽 그려두고 10~15㎝ 간격에 하나의 씨앗을 넣고 흙을 덮는다.<br><br>2) 1㎝ 미만으로 덮는 것이 좋다. 줄 간격은 나중에 옮겨 심을 때 작업성을 고려해 20㎝ 이상을 유지한다.<br><br>3) 파종 후 2~3일 간격으로 물을 주어 모종상이 건조해지지 않도록 관리한다.<br><br>4) 봄철에 파종한 아스파라거스는 상당한 기간이 지나야 싹이 튼다. 기온이 낮은 초봄에는 오랜 기간이 필요하다.<br><br>5) 모종밭을 보면 6주가 지나도 아직까지 싹을 틔우고 있는 아스파라거스가 보인다. 이때는 봄풀이 많이 돋아나므로 꼼꼼하게 정리해주어야 한다.<br><br>6) 이때 포기수가 많이 늘어난 포기부터 하나씩 옮겨심기를 해주면 튼튼한 모종으로 자란다.","step2" : "1) 2년째 봄의 것은 그다지 큰 줄기는 생기지 않으나 작은 줄기를 많이 길러낸다. 이 작은 줄기가 자라서 뿌리에 영양을 축적한다.<br><br>2) 3년째에는 굵고 튼실한 줄기를 많이 기른다. 5월이 되면 많이 자란 줄기에서는 종 모양의 작은 꽃이 피고 열매를 맺는다.","step3" : "1) 3월 말에 돋아나기 시작하는 줄기의 윗부분이 피기 전에 줄기의 아랫부분을 잘라내 수확한다.","intro_img" : "./image/intro_img/asparagus.png"},'+
    '{   "kname" : "콩나물", "ename": "bean sprouts", "click": 0, "imgsrc": "Solution/image/category_img/etc/bean_sprouts.png","level" : 1,"shortEx": "대두를 발아시켜 싹을 틔운 콩나물은 아삭한 식감으로 나물을 만들어 먹어도 좋고, 국을 끓일 때 넣어 시원한 맛을 내기도 한다. 콩나물에 함유된 아스파라긴산은 해독작용을 하므로 숙취 해소 음식으로 많이 활용된다.","water" : "하루에 두세번","sun" : "햇빛필요없음","plant" : "4월, 5월~","place" : "실내재배가 쉬운편이다.","step1" : "1) 깨진콩과 찌끄러기는 골라내고,깨끗이 씻어서  물에 담가준다.<br><br>2) 8시간정도 불린다.<br><br>3) 구멍이 뚫린 바구니에 망사형겁을 깔아준다.<br><br>4) 바구니에 맞는 통에 얹어서 젖은보를 덜어준다.","step2" : "1) 콩이 굵어지고 껍질이 갈라진다.<br><br>2) 뿌리가 바구니 밑으로 내려온다","step3" : "1) 먹을만한 크기가되면 수확해준다.","intro_img" : "./image/intro_img/bean_sprouts.png"},'+
    '{   "kname" : "브로콜리", "ename": "broccoli", "click": 0, "imgsrc": "Solution/image/category_img/etc/broccoli.png","level" : 2,"shortEx": "타임지가 선정한 세계 10대 푸드 중 하나인 브로콜리는 항암 식품으로 잘 알려져 있으며 비타민 C가 레몬의 2배로 감기 예방과 피부 건강에 효과적인 식품이다. 겨자과에 속하는 짙은 녹색 채소로 \'녹색 꽃양배추\'라고도 불린다.","water" : "흙이 건조해지면 듬뿍주기","sun" : "볕이 잘 드는","plant" : "2월 ~ 3월 / 6월 ~ 8월","place" : "실내재배가 가능하다.","step1" : "1) 씨앗의 두 배 정도 깊이에 심는다.","step2" : "1) 50cm x 60cm 간격으로 심는다.<br><br>2) 심은 지 2주 정도 후에 웃거름.","step3" : "1) 6월 / 10월 사이에 수확할 수 있다.","intro_img" : "./image/intro_img/broccoli.png"}]}';


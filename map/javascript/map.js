var map = new AMap.Map('map');
    //更多方法与插件请查阅高德JS API
    //一个事件
    /*AMap.event.addListener(map,"dragend",function(){//拖拽弹出显示
        alert("你拽我了，但是我不生气~");
    });

    //五个插件
    map.plugin(["AMap.Scale"],function(){
        var scale=new AMap.Scale();//比例尺控件
        map.addControl(scale);
    });
    map.plugin(["AMap.MapType"],function(){
        var type=new AMap.MapType();//地图类型
        map.addControl(type);
    });
    map.plugin(["AMap.OverView"],function(){
        var view=new AMap.OverView();//鹰眼控件
        view.open();//默认关闭
        map.addControl(view);
    });
    map.plugin(["AMap.ToolBar"],function(){
        var tool=new AMap.ToolBar();//工具栏
        map.addControl(tool);//control加载在地图上
    });
    map.plugin(["AMap.RangingTool"],function(){
        var ruler=new AMap.RangingTool(map);//测量距离
        ruler.turnOn();
    });*/

    //点击marker弹出信息框
    /*var marker=new AMap.Marker({
        map:map
    });
    marker.setPosition(map.getCenter());
    marker.setIcon("http://www.easyicon.net/api/resizeApi.php?id=1162312&size=16");
    var info=new AMap.InfoWindow({
        closeWhenClickMap:true,//点击地图窗口消失
        content:"您所在的位置"//窗口内容
    });
    AMap.event.addListener(marker,"click",function(){//marker点击时触发事件
        info.open(map,map.getCenter());
    });*/

    //定位功能
    /*map.plugin("AMap.Geolocation",function(){
        geolocation=new AMap.Geolocation({
            timeout:10000,//超过10秒，停止定位
            zoomToAccuracy:true  //定位成功后调整地图视野范围使定位位置及精度范围视野内可见
        });
        map.addControl(geolocation);
        AMap.event.addListener(geolocation,"complete",onComplete);//返回定位信息
        AMap.event.addListener(geolocation,"error",onError);//返回定位出错信息
    });*/

    //搜素地点
    /*function search(){
        var map = new AMap.Map('map');
        var text=document.getElementById("input").value;
        map.plugin(["AMap.PlaceSearch"],function(){
        var place=new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            map: map,
            panel: "panel"
        });
        place.search(text);
    });
    }*/

    //搜素驾车路线
    /*function searchDriving() { 
          /*var input1=document.getElementById("input1").value;
          var input2=document.getElementById("input2").value;

          var text1="中山大学",text2="广东工业大学";
            map.plugin(["AMap.Driving"], function() {
                var drivingOption = {
                    policy:AMap.DrivingPolicy.LEAST_TIME,
                    map:map,
                    panel: "panel"
                };
            var driving = new AMap.Driving(drivingOption); //构造驾车导航类
                //根据起终点坐标规划驾车路线
                driving.search([{keyword:text1,city:'010'},{keyword:text2,city:'010'}]);   
            });
    } */ 

    //搜索步行路线
    /*function searchWalking(){
        var text1="中山大学",text2="广东工业大学";
        map.plugin(["AMap.Walking"], function() {
        var Walking = new AMap.Walking({
            map: map,
            panel: "panel"
        });
       Walking.search([
            {keyword: text1},
            {keyword: text2}
        ]);
      });
    }*/

    //搜索乘车路线
    /*function searchTransfer(){
        var text1="中山大学",text2="广东工业大学";
        map.plugin(["AMap.Transfer"], function() {
        var transferOptions = {
            map: map,
            city: '北京市',                            //公交城市
            //cityd:'乌鲁木齐',
            policy: AMap.TransferPolicy.LEAST_TIME,//乘车策略
            panel: "panel"
        };
        //构造公交换乘类
        var transfer = new AMap.Transfer(transferOptions);
        //根据起、终点坐标查询公交换乘路线
        transfer.search([{keyword:text1},{keyword:text2}]);
      });
    }*/
    
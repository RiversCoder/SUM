function drawBackground(){
	//针对谷歌浏览器，只有图片加载完，才能调用drawImage(),否则不能显示图片
	bgPic.onload = function(){
		//图片从（0，0）开始，长宽是canvas的长宽
		context2.drawImage(bgPic,0,0,canWidth,canHeight);
		
		//海葵和背景一起绘制
		ane=new aneObj();
		ane.init();
		ane.draw();
	}
}
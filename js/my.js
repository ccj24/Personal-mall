	//轮播图开始(1)
	var i = 0 ;
	var timer;
	$(document).ready(function(){
  	//用jquery方法设置第一张图片显示，其余隐藏
  		$('.ig').eq(0).show().siblings('.ig').hide();  
  		//调用showTime()函数（轮播函数）
  		showTime();  
  		//当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  		$('.tab').hover(function(){
    	//获取当前i的值，并显示，同时还要清除定时器
    	i = $(this).index();
    	Show();
    	clearInterval(timer);
  	},function(){
    	showTime();
  	});   
  	//鼠标点击左侧的箭头
  	$('.btn1').click(function(){
    	clearInterval(timer);
    	if(i == 0){
     	 	i = 5;//注意此时i的值
    	}
    	i--;
    	Show();
    	showTime();
  	});   
  	//鼠标点击右侧的箭头
  	$('.btn2').click(function(){
    	clearInterval(timer);
    	if(i == 4){
      		i = -1;//注意此时i的值
    	}
    	i++;
    	Show();
    	showTime();
  	});   
	}); 
	//创建一个showTime函数
	function showTime(){
  		//定时器
  		timer = setInterval(function(){
    	//调用一个Show()函数
    	Show();
    	i++;
    	//当图片是最后一张的后面时，设置图片为第一张
    	if(i==5){
      		i=0;
    		}
  		},3000);
	} 	
	//创建一个Show函数
	function Show(){
  		//在这里可以用其他jquery的动画
  		$('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
   
  		//给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  		$('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');
	}
	//轮播图结束


  //显示隐藏（2）
  $(function(){
    $("#main_section>ul>li").hover(function(){
      $(".hidden_main").addClass("block");
    },function(){
      $(".hidden_main").removeClass("block");
    })   
  })


	//限量抢购（3）
    $(function() {
		var conveyor = $(".content-conveyor", $("#sliderContent")),
		item = $(".item", $("#sliderContent"));		
		//设定长度
		conveyor.css("width", item.length * parseInt(item.css("width")));				
        //配置
        var sliderOpts = {
		      max: (item.length * parseInt(item.css("width"))) - parseInt($(".viewer", $("#sliderContent")).css("width")),
          slide: function(e, ui) { 
            conveyor.css("left", "-" + ui.value + "px");
          }
        };
        //创建滑块
        $("#slider").slider(sliderOpts);
    });
    //限量抢购结束


    //返回顶部（4）
	function back(){ 
		//alert(1);
		var back = document.getElementById('back_top');
		//console.log(back);
		document.body.scrollTop='0';
		document.documentElement.scrollTop='0';
	}


  //大品牌动画（5）
  $(document).ready(function(){
    $(".dong ul li").mouseover(function(){
      $(this).animate({ top: '+50px' });
    });
    $(".dong ul li").mouseout(function(){
      $(this).animate({ top: '0' });
    });
  });


  //选项卡（6）
  $(document).ready(function(){
    $(".tab_menu ul li").click(function(){
      alert(111);
      $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
      //$(".tab_menu ul li:eq(0)").css({"width":"50px","text-align":"left"});
      var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
      $(".tab_box > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
      });
    });

  //购物车
  $(function() {
          totl();
          adddel()
            //全选（7）
          $("#all").click(function() {
              all = $(this).prop("checked")
              $(".Each").each(function() {
                $(this).prop("checked", all);
              })
          })
            //删除当前行（8）
          $(".del").each(function() {
              $(this).click(function() {
                $(this).parent().remove();
                if($(".imfor").length == 0) {
                  $("#susum").text(0);
                }
                totl();
              })
            })
            //添加一行（9）
          $(".foot_add").click(function() {
              var str = '<div class="imfor">' +
                '<div class="check">' +
                '<input type="checkbox" class="Each" />' +
                '</div>' +
                '<div class="pudc"><img src="../images/5.jpg" /><span>Fujifilm/富士 instax mini 25</span></div>' +
                '<div class="pices">640.6</div>' +
                '<div class="num"><span class="reduc">&nbsp;-&nbsp;</span><input type="text" value="1" /><span class="add">&nbsp;+</span></div>' +
                '<div class="totle">640.6</div>' +
                '<div class="del">删除</div>' +
                '</div>';
              $(this).parent().prev().append(str);
              totl();
              adddel()
              $(".del").each(function() {
                $(this).click(function() {
                  $(this).parent().remove();
                  totl();
                })
              })
            })
            //全选删除  （10）                 
          $(".foot_del").click(function() {
            $(".Each").each(function() {
              if($(this).prop('checked')) {
                $(this).parents(".imfor").remove();
                totl();
                if($(".imfor").length == 0) {
                  $("#susum").text(0);
                }
              }
            })

          })

        })
        //合计（11）
      function totl() {
        var sum = 0;
        $(".totle").each(function() {
          sum += parseFloat($(this).text());
          $("#susum").text(sum);
        })
      }
      function adddel(){
        //小计和加减（12）
          //加
          $(".add").each(function() {
              $(this).click(function() {
                var $multi = 0;
                var vall = $(this).prev().val();
                vall++;
                $(this).prev().val(vall);
                $multi = parseFloat(vall) * parseFloat($(this).parent().prev().text());
                $(this).parent().next().text(Math.round($multi));
                totl();
              })

            })
            //减
          $(".reduc").each(function() {
              $(this).click(function() {
                var $multi1 = 0;
                var vall1 = $(this).next().val();
                vall1--;
                if(vall1 <= 0) {
                  vall1 = 1;
                }
                $(this).next().val(vall1);
                $multi1 = parseFloat(vall1) * parseFloat($(this).parent().prev().text());
                $(this).parent().next().text(Math.round($multi1));
                totl();
              })

            })
      }
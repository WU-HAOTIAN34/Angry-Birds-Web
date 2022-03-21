$(function(){
    setInterval(function(){
        $('div.p1-bird-animation-1').animate({top: '2.4rem', left: '4.8rem'},1000,'linear').animate({top: '3.6rem', left: '11.2rem'},1000,'linear')
        .animate({top: '5.6rem' , left: '17.2rem'},1000,'linear').animate({top: '8.4rem', left: '23.2rem'},1000,'linear')
        .animate({top: '12rem', left: '28.5rem'},1000,'linear',function(){
            $('div.p1-bird-animation-1').css({top: '2rem', left: '-5rem'})
        })
    })
    setInterval(function(){
        $('div.p1-bird-animation-2').css('display','block').animate({top: '1rem', left: '11.5rem'},2500,'linear')
        .animate({top: '12.5rem', left: '21rem'},2500,'linear',function(){
            $('div.p1-bird-animation-2').css({top: '10rem', left: '1rem',diaplay:'none'})
        })
    },2500)
    setInterval(function(){
        $('div.p1-fly').css('display','block').animate({marginLeft: '-4rem'},8000,'linear',function(){
            $('div.p1-fly').css({diaplay:'none',marginLeft:'25rem'})
        })
    })
    setInterval(function(){
        $('div.p1-bird-animation-6').animate({left: '10.4rem', top: '8rem'},1500,'linear').animate({left: '8rem', top: '11rem'},1500,'linear')
        .animate({left: '9rem', top: '11rem'},200,'linear').animate({left: '14rem', top: '10.6rem'},1500,'linear')
        .animate({left: '20rem', top: '10rem'},1500,'linear').animate({left: '24rem' ,top: '7rem'},1500,'linear')
        .animate({left: '26rem', top: '4rem'},1500,'linear').animate({left: '24rem', top: '2rem'},1500,'linear')
        .animate({left: '12rem', top: '4rem'},2000,'linear')
    })
})
$(function(){
    if($('button.submit')[0]!=null){
        var position;
        $('button.submit').click(function(obj){
        var Username = /^[A-z]{6}$/;
        var Password = /^\d{8}$/;
        if(!Username.test($('input.username').val())&&!Password.test($('input.password').val())){
            alert("Incorrect Username format \n Incorrect Password format")
            $('input.username').val('')
            $('input.password').val('')
        }else if(!Username.test($('input.username').val())){
            alert("Incorrect Username format")
            $('input.username').val('')
        }else if(!Password.test($('input.password').val())){
            alert("Incorrect Password format")
            $('input.password').val('')
        }else if(Username.test($('input.username').val())&&Password.test($('input.password').val())){
            alert("Welcome:    " + $('input.username').val() + "\nFrom:      " + position)
            $('input.username').val('')
            $('input.password').val('')
        }  
        if(typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            $('div#times')[0].innerHTML = "You have submitted " + localStorage.clickcount + " times.";
        } else{
            $('div#times')[0].innerHTML = "Sorry, your brower doesn't support Web Storage.";
        }     
    })
    var mapObj = new AMap.Map('map');
    mapObj.plugin('AMap.Geolocation', function () {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, 
            timeout: 10000,           
            maximumAge: 0,            
            convert: true,            
            showButton: true,         
            buttonPosition: 'LB',    
            buttonOffset: new AMap.Pixel(10, 20), 
            showMarker: true,         
            showCircle: true,         
            panToLocation: true,      
            zoomToAccuracy:true       
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete); 
        AMap.event.addListener(geolocation, 'error', onError);       
    });
    function onComplete(obj){
        $('div#map-text')[0].innerHTML = "<div>Longitude and Latitude：" + obj.position + "<div>" + "<div>Source：" + obj.location_type + "<div>"
                                         + "<div>Address：" + obj.formattedAddress + "<div>"
        position = obj.formattedAddress
    }
    function onError(obj) {
        alert(obj.info + '--' + obj.message);
        console.log(obj);
    }
    }
})
$(function(){
    if(document.getElementById('bird')!=null){
        var bird = document.getElementById('bird');
        var origt = bird.style.top
        var origl = bird.style.left
        bird.onmousedown = function(){
            document.onmousemove = function(event){
                var left = event.clientX
                var top = event.clientY
                bird.style.left = left - 15 + 'px'
                bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                -  parseInt($('div.bird-animation').css('top')) - 15 + 'px'   
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null
            $bird = $('#bird')
            var left = parseInt(bird.style.left)
            var top = parseInt(bird.style.top)
            var leftlim = parseInt($('div.slingshot-block').css('left'))
            var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
            var toplim = parseInt($('div.slingshot-block').css('top'))
            var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
            if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                bird.style.top = 6.4 + 'rem'
                bird.style.left = 5 + 'rem'
                $bird.animate({left:'6.6rem', top:'5.14rem'},200,'linear').animate({left:'8.2rem', top:'4.16rem'},200,'linear')
                    .animate({left:'9.8rem', top:'3.46rem'},200,'linear').animate({left:'11.4rem', top:'3.04rem'},200,'linear')
                    .animate({left:'13rem', top:'2.9rem'},200,'linear').animate({left:'18rem'},625,'linear',function(){
                        $('div.pig-1').css('background-position-x','2rem')
                    })
            }else{
                bird.style.top = origt
                bird.style.left = origl
            }
            return
        }
        $('button.try').click(function(){
            $('div.pig-1').css('background-position-x','0.1rem')
            bird.style.top = origt
            bird.style.left = origl
        })
    }
})
$(function(){
    if(document.getElementById('bird-2')!=null){
        setInterval(function(){
            setTimeout(function(){
                $('div#click')[0].style.color = '#4BDC00'
            },400)
            setTimeout(function(){
                $('div#click')[0].style.color = 'red'
            },800)
        },1200) 
        var bird = document.getElementById('bird-2');
        var origt = bird.style.top
        var origl = bird.style.left
        bird.onmousedown = function(){
            document.onmousemove = function(event){
                var left = event.clientX
                var top = event.clientY
                bird.style.left = left - 15 + 'px'
                bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                 -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
            }
        }       
        document.onmouseup = function(){
            document.onmousemove = null
            $bird = $('#bird-2')
            var left = parseInt(bird.style.left)
            var top = parseInt(bird.style.top)
            var leftlim = parseInt($('div.slingshot-block').css('left'))
            var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
            var toplim = parseInt($('div.slingshot-block').css('top'))
            var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
            if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                bird.style.top = 6.4 + 'rem'
                bird.style.left = 5 + 'rem'
                $bird.animate({left:'6rem', top:'5.14rem'},200,'linear').animate({left:'7rem', top:'4.16rem'},200,'linear')
                     .animate({left:'8rem', top:'3.46rem'},200,'linear').animate({left:'9rem', top:'3.04rem'},200,'linear')
                     .animate({left:'10rem', top:'2.9rem'},200,'linear',function(){
                        bird.onmousedown = null
                        document.onmouseup = null
                        $('div#click').css('display','block')
                        document.onclick = function(){
                            $('div#click').css('display','none')
                            $bird.animate({left:'18rem'},100,'linear',function(){
                                $('div.pig-1').css('background-position-x','2rem')
                                document.onclick = null
                            })
                       }
                    })
            }else{
                bird.style.top = origt
                bird.style.left = origl
            }
            return
        }
        $('button.try').click(function(){
            $('div.pig-1').css('background-position-x','0.1rem')
            bird.style.top = origt
            bird.style.left = origl
            bird.onmousedown = function(){
                document.onmousemove = function(event){
                    var left = event.clientX
                    var top = event.clientY
                    bird.style.left = left - 15 + 'px'
                    bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                    -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
                }
            }
            document.onmouseup = function(){
                document.onmousemove = null
                $bird = $('#bird-2')
                var left = parseInt(bird.style.left)
                var top = parseInt(bird.style.top)
                var leftlim = parseInt($('div.slingshot-block').css('left'))
                var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
                var toplim = parseInt($('div.slingshot-block').css('top'))
                var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
                if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                    bird.style.top = 6.4 + 'rem'
                    bird.style.left = 5 + 'rem'
                    $bird.animate({left:'6rem', top:'5.14rem'},200,'linear').animate({left:'7rem', top:'4.16rem'},200,'linear')
                         .animate({left:'8rem', top:'3.46rem'},200,'linear').animate({left:'9rem', top:'3.04rem'},200,'linear')
                         .animate({left:'10rem', top:'2.9rem'},200,'linear',function(){
                            bird.onmousedown = null
                            document.onmouseup = null
                            $('div#click').css('display','block')
                            document.onclick = function(){
                                $('div#click').css('display','none')
                                $bird.animate({left:'18rem'},100,'linear',function(){
                                    $('div.pig-1').css('background-position-x','2rem')
                                    document.onclick = null
                                })
                           }
                        })
                }else{
                    bird.style.top = origt
                    bird.style.left = origl
                }
                return
            }
        })
    }
})
$(function(){
    if(document.getElementById('bird-3')!=null){
        setInterval(function(){
            setTimeout(function(){
                $('div#click')[0].style.color = '#4BDC00'
            },400)
            setTimeout(function(){
                $('div#click')[0].style.color = 'red'
            },800)
        },1200) 
        var bird = document.getElementById('bird-3');
        var origt = bird.style.top
        var origl = bird.style.left
        bird.onmousedown = function(){
            document.onmousemove = function(event){
                var left = event.clientX
                var top = event.clientY
                bird.style.left = left - 15 + 'px'
                bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null
            $bird = $('#bird-3')
            var left = parseInt(bird.style.left)
            var top = parseInt(bird.style.top)
            var leftlim = parseInt($('div.slingshot-block').css('left'))
            var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
            var toplim = parseInt($('div.slingshot-block').css('top'))
            var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
            if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                bird.style.top = 6.4 + 'rem'
                bird.style.left = 5 + 'rem'
                $bird.animate({left:'6.6rem', top:'5.14rem'},200,'linear').animate({left:'8.2rem', top:'4.16rem'},200,'linear')
                     .animate({left:'9.8rem', top:'3.46rem'},200,'linear').animate({left:'11.4rem', top:'3.04rem'},200,'linear')
                     .animate({left:'13.5rem', top:'2.9rem'},200,'linear',function(){
                        bird.onmousedown = null
                        document.onmouseup = null
                        $('div#click').css('display','block')
                        document.onclick = function(){
                            $('div#click').css('display','none')
                            $bird.css('display','none')
                            $('div#bird-3-1').css('display','block').animate({top: '1.6rem', left: '18rem'},550,'linear')
                            $('div#bird-3-2').css('display','block').animate({top: '4.2rem', left: '18rem'},550,'linear')
                            $('div#bird-3-3').css('display','block').animate({left: '18rem'},550,'linear',function(){
                                $('div.pig-1').css('background-position-x','2rem')
                                document.onclick = null
                            })  
                       }
                    })
            }else{
                bird.style.top = origt
                bird.style.left = origl
            }
            return
        }
        $('button.try').click(function(){
            $('div.pig-1').css('background-position-x','0.1rem')
            bird.style.top = origt
            bird.style.left = origl
            $bird.css('display','block')
            $('div#bird-3-1').css({display: 'none',top:'2.2rem', left:'14rem'})
            $('div#bird-3-2').css({display: 'none',top:'3.6rem', left:'14rem'})
            $('div#bird-3-3').css({display: 'none',top:'2.9rem', left:'14rem'})
            bird.onmousedown = function(){
                document.onmousemove = function(event){
                    var left = event.clientX
                    var top = event.clientY
                    bird.style.left = left - 15 + 'px'
                    bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                    -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
                }
            }
            document.onmouseup = function(){
                document.onmousemove = null
                $bird = $('#bird-3')
                var left = parseInt(bird.style.left)
                var top = parseInt(bird.style.top)
                var leftlim = parseInt($('div.slingshot-block').css('left'))
                var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
                var toplim = parseInt($('div.slingshot-block').css('top'))
                var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
                if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                    bird.style.top = 6.4 + 'rem'
                    bird.style.left = 5 + 'rem'
                    $bird.animate({left:'6.6rem', top:'5.14rem'},200,'linear').animate({left:'8.2rem', top:'4.16rem'},200,'linear')
                         .animate({left:'9.8rem', top:'3.46rem'},200,'linear').animate({left:'11.4rem', top:'3.04rem'},200,'linear')
                         .animate({left:'13.5rem', top:'2.9rem'},200,'linear',function(){
                            bird.onmousedown = null
                            document.onmouseup = null
                            $('div#click').css('display','block')
                            document.onclick = function(){
                                $('div#click').css('display','none')
                                $bird.css('display','none')
                                $('div#bird-3-1').css('display','block').animate({top: '1.6rem', left: '18rem'},550,'linear')
                                $('div#bird-3-2').css('display','block').animate({top: '4.2rem', left: '18rem'},550,'linear')
                                $('div#bird-3-3').css('display','block').animate({left: '18rem'},550,'linear',function(){
                                    $('div.pig-1').css('background-position-x','2rem')
                                    document.onclick = null
                                })  
                           }
                        })
                }else{
                    bird.style.top = origt
                    bird.style.left = origl
                }
                return
            }
        })
    }
})
$(function(){
    if(document.getElementById('bird-4')!=null){
        setInterval(function(){
            setTimeout(function(){
                $('div#click')[0].style.color = '#4BDC00'
            },400)
            setTimeout(function(){
                $('div#click')[0].style.color = 'red'
            },800)
        },1200) 
        var bird = document.getElementById('bird-4');
        var origt = bird.style.top
        var origl = bird.style.left
        bird.onmousedown = function(){
            document.onmousemove = function(event){
                var left = event.clientX
                var top = event.clientY
                bird.style.left = left - 15 + 'px'
                bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null
            $bird = $('#bird-4')
            var left = parseInt(bird.style.left)
            var top = parseInt(bird.style.top)
            var leftlim = parseInt($('div.slingshot-block').css('left'))
            var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
            var toplim = parseInt($('div.slingshot-block').css('top'))
            var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
            if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                bird.style.top = 6.4 + 'rem'
                bird.style.left = 5 + 'rem'
                $bird.animate({left:'6.6rem', top:'5.14rem'},200,'linear').animate({left:'8.2rem', top:'4.16rem'},200,'linear')
                     .animate({left:'9.8rem', top:'3.46rem'},200,'linear').animate({left:'11.4rem', top:'3.04rem'},200,'linear')
                     .animate({left:'13rem', top:'2.9rem'},200,'linear').animate({left:'17rem'},600,'linear',function(){
                        bird.onmousedown = null
                        document.onmouseup = null
                        $('div#click').css('display','block')
                        document.onclick = function(){
                            $('div#click').css('display','none')
                            $bird.css('background-position-x','-0.2rem')
                            $('div.pig-2').css('background-position-x','2rem')
                            $('div.pig-1').css('background-position-x','2rem')
                            document.onclick = null
                        }
                    })
            }else{
                bird.style.top = origt
                bird.style.left = origl
            }
            return
        }
        $('button.try').click(function(){
            $('div.pig-1').css('background-position-x','0.1rem')
            $('div.pig-2').css('background-position-x','0.1rem')
            $bird.css('background-position-x','-1.6rem')
            bird.style.top = origt
            bird.style.left = origl
            bird.onmousedown = function(){
                document.onmousemove = function(event){
                    var left = event.clientX
                    var top = event.clientY
                    bird.style.left = left - 15 + 'px'
                    bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                    -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
                }
            }
            document.onmouseup = function(){
                document.onmousemove = null
                $bird = $('#bird-4')
                var left = parseInt(bird.style.left)
                var top = parseInt(bird.style.top)
                var leftlim = parseInt($('div.slingshot-block').css('left'))
                var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
                var toplim = parseInt($('div.slingshot-block').css('top'))
                var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
                if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                    bird.style.top = 6.4 + 'rem'
                    bird.style.left = 5 + 'rem'
                    $bird.animate({left:'6.6rem', top:'5.14rem'},200,'linear').animate({left:'8.2rem', top:'4.16rem'},200,'linear')
                         .animate({left:'9.8rem', top:'3.46rem'},200,'linear').animate({left:'11.4rem', top:'3.04rem'},200,'linear')
                         .animate({left:'13rem', top:'2.9rem'},200,'linear').animate({left:'17rem'},600,'linear',function(){
                            bird.onmousedown = null
                            document.onmouseup = null
                            $('div#click').css('display','block')
                            document.onclick = function(){
                                $('div#click').css('display','none')
                                $bird.css('background-position-x','-0.2rem')
                                $('div.pig-2').css('background-position-x','2rem')
                                $('div.pig-1').css('background-position-x','2rem')
                                document.onclick = null
                            }
                        })
                }else{
                    bird.style.top = origt
                    bird.style.left = origl
                }
                return
            }
        })
    }
})
$(function(){
    if(document.getElementById('bird-5')!=null){
        setInterval(function(){
            setTimeout(function(){
                $('div#click')[0].style.color = '#4BDC00'
            },400)
            setTimeout(function(){
                $('div#click')[0].style.color = 'red'
            },800)
        },1200) 
        var bird = document.getElementById('bird-5');
        var origt = bird.style.top
        var origl = bird.style.left
        bird.onmousedown = function(){
            document.onmousemove = function(event){
                var left = event.clientX
                var top = event.clientY
                bird.style.left = left - 15 + 'px'
                bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                 -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null
            $bird = $('#bird-5')
            var left = parseInt(bird.style.left)
            var top = parseInt(bird.style.top)
            var leftlim = parseInt($('div.slingshot-block').css('left'))
            var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
            var toplim = parseInt($('div.slingshot-block').css('top'))
            var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
            if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                bird.style.top = 6.4 + 'rem'
                bird.style.left = 5 + 'rem'
                $bird.animate({left:'7.8rem', top:'4.1rem'},330,'linear').animate({left:'10.6rem', top:'2.3rem'},330,'linear')
                     .animate({left:'13.4rem', top:'1.02rem'},330,'linear').animate({left:'16.2rem', top:'0.26rem'},330,'linear')
                     .animate({left:'19rem', top:0},330,'linear',function(){
                        bird.onmousedown = null
                        document.onmouseup = null
                        $('div#click').css('display','block')
                        document.onclick = function(){
                            $('div#click').css('display','none')
                            $('div.egg').css('display','block')
                            $bird.animate({left:'23.6rem'},400,'linear')
                            $('div.egg').animate({top:'3.2rem'},200,'linear',function(){
                                $('div.pig-1').css('background-position-x','2rem')
                                document.onclick = null
                            })
                       }
                    })
            }else{
                bird.style.top = origt
                bird.style.left = origl
            }
            return
        }
        $('button.try').click(function(){
            $('div.pig-1').css('background-position-x','0.1rem')
            $('div.egg').css('display','none')
            $('div.egg').css('top','1.2rem')
            bird.style.top = origt
            bird.style.left = origl
            bird.onmousedown = function(){
                document.onmousemove = function(event){
                    var left = event.clientX
                    var top = event.clientY
                    bird.style.left = left - 15 + 'px'
                    bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                    -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
                }
            }
            document.onmouseup = function(){
                document.onmousemove = null
                $bird = $('#bird-5')
                var left = parseInt(bird.style.left)
                var top = parseInt(bird.style.top)
                var leftlim = parseInt($('div.slingshot-block').css('left'))
                var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
                var toplim = parseInt($('div.slingshot-block').css('top'))
                var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
                if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                    bird.style.top = 6.4 + 'rem'
                    bird.style.left = 5 + 'rem'
                    $bird.animate({left:'7.8rem', top:'4.1rem'},330,'linear').animate({left:'10.6rem', top:'2.3rem'},330,'linear')
                         .animate({left:'13.4rem', top:'1.02rem'},330,'linear').animate({left:'16.2rem', top:'0.26rem'},330,'linear')
                         .animate({left:'19rem', top:0},330,'linear',function(){
                            bird.onmousedown = null
                            document.onmouseup = null
                            $('div#click').css('display','block')
                            document.onclick = function(){
                                $('div#click').css('display','none')
                                $('div.egg').css('display','block')
                                $bird.animate({left:'23.6rem'},400,'linear')
                                $('div.egg').animate({top:'3.2rem'},200,'linear',function(){
                                    $('div.pig-1').css('background-position-x','2rem')
                                    document.onclick = null
                                })
                           }
                        })
                }else{
                    bird.style.top = origt
                    bird.style.left = origl
                }
                return
            }
        })
    }
})
$(function(){
    if(document.getElementById('bird-6')!=null){
        setInterval(function(){
            setTimeout(function(){
                $('div#click')[0].style.color = '#4BDC00'
            },400)
            setTimeout(function(){
                $('div#click')[0].style.color = 'red'
            },800)
        },1200) 
        var bird = document.getElementById('bird-6');
        var origt = bird.style.top
        var origl = bird.style.left
        bird.onmousedown = function(){
            document.onmousemove = function(event){
                var left = event.clientX
                var top = event.clientY
                bird.style.left = left - 15 + 'px'
                bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null
            $bird = $('#bird-6')
            var left = parseInt(bird.style.left)
            var top = parseInt(bird.style.top)
            var leftlim = parseInt($('div.slingshot-block').css('left'))
            var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
            var toplim = parseInt($('div.slingshot-block').css('top'))
            var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
            if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                bird.style.top = 6.4 + 'rem'
                bird.style.left = 5 + 'rem'
                $bird.animate({left:'9.4rem', top:'4.1rem'},330,'linear').animate({left:'13.8rem', top:'2.3rem'},330,'linear')
                     .animate({left:'18.2rem', top:'1.02rem'},330,'linear').animate({left:'22.6rem', top:'0.26rem'},330,'linear')
                     .animate({left:'27rem', top:0},330,'linear',function(){
                        bird.onmousedown = null
                        document.onmouseup = null
                        $('div#click').css('display','block')
                        document.onclick = function(){
                            $('div#click').css('display','none')
                            $bird.css('background-position-x','-1.4rem').animate({left:'24rem', top:'2rem'},200,'linear',function(){
                                $('div.pig-2').css('background-position-x','2rem')
                                document.onclick = null
                            })
                       }
                    })
            }else{
                bird.style.top = origt
                bird.style.left = origl
            }
            return
        }
        $('button.try').click(function(){
            $('div.pig-2').css('background-position-x','0.1rem')
            $bird.css('background-position-x','0rem')
            bird.style.top = origt
            bird.style.left = origl
            bird.onmousedown = function(){
                document.onmousemove = function(event){
                    var left = event.clientX
                    var top = event.clientY
                    bird.style.left = left - 15 + 'px'
                    bird.style.top = top - parseInt($('nav.p5-navigation-bar-background').css('height')) 
                                    -  parseInt($('div.bird-animation').css('top')) - 15 + 'px' 
                }
            }
            document.onmouseup = function(){
                document.onmousemove = null
                $bird = $('#bird-6')
                var left = parseInt(bird.style.left)
                var top = parseInt(bird.style.top)
                var leftlim = parseInt($('div.slingshot-block').css('left'))
                var rightlim = leftlim + parseInt($('div.slingshot-block').css('width'))
                var toplim = parseInt($('div.slingshot-block').css('top'))
                var bottomlim = toplim + parseInt($('div.slingshot-block').css('height'))
                if(left>=leftlim&&left<=rightlim&&top>=toplim&&top<=bottomlim){
                    bird.style.top = 6.4 + 'rem'
                    bird.style.left = 5 + 'rem'
                    $bird.animate({left:'9.4rem', top:'4.1rem'},330,'linear').animate({left:'13.8rem', top:'2.3rem'},330,'linear')
                         .animate({left:'18.2rem', top:'1.02rem'},330,'linear').animate({left:'22.6rem', top:'0.26rem'},330,'linear')
                         .animate({left:'27rem', top:0},330,'linear',function(){
                            bird.onmousedown = null
                            document.onmouseup = null
                            $('div#click').css('display','block')
                            document.onclick = function(){
                                $('div#click').css('display','none')
                                $bird.css('background-position-x','-1.4rem').animate({left:'24rem', top:'2rem'},200,'linear',function(){
                                    $('div.pig-2').css('background-position-x','2rem')
                                    document.onclick = null
                                })
                           }
                        })
                }else{
                    bird.style.top = origt
                    bird.style.left = origl
                }
                return
            }
        })
    }
})
var i,c,y,v,s,n;for((v=document.getElementsByClassName("youtube")).length>0&&((s=document.createElement("style")).type="text/css",s.innerHTML='.youtube{background-color:#000;max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("./img/youtube-play-icon.png") no-repeat}',document.body.appendChild(s)),n=0;n<v.length;n++)y=v[n],(i=document.createElement("img")).setAttribute("src","https://i.ytimg.com/vi/"+y.id+"/hqdefault.jpg"),i.setAttribute("class","thumb"),(c=document.createElement("div")).setAttribute("class","play"),y.appendChild(i),y.appendChild(c),y.onclick=function(){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0&controls=0"),t.setAttribute("allowfullscreen",""),t.style.width=this.style.width,t.style.height=this.style.height,this.parentNode.replaceChild(t,this)};
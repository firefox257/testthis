
var $q=(function ()
	{
		function at(func)
		{
			this.__func=func;
			this.__func();
		}
		function a(id, func)
		{
			this.$v= this.$at.querySelectorAll(id);
			if(func)
			{
				for(this.$count=0; this.$count<this.$v.length; this.$count++)
				{
					var ne =_new();
					ne.$count=this.$count;
					ne.$v=this.$v;
					ne.$at=this.$v[this.$count];
					ne.at(func);
				}
			}
			return this;
		}
		function s(id,func)
		{
			var ne=_new();
			if(typeof id === "string") ne.$at=this.$at.querySelector(id);
			else ne.$at=id;
			if(ne.$at)
			{
				if(func)ne.at(func);
				return ne;
			}
			return null;
		}
		function html(text)
		{
			if(text)
			{
				this.$at.innerHTML=text;
				return this;
			}
			return this.$at.innerHTML;
		}
		function attr(id,text)
		{
			if(text)
			{
				this.$at.setAttribute(id,text);
				return this;
			}
			else return this.$at.getAttribute(id);
		}
		function rattr(id)
		{
			this.$at.removeAttribute(id,text);
			return this;
		}
		function create(text)
		{
			var ne=_new();
			if(typeof text === "string")
			{
				var el=document.createElement('span');
				el.innerHTML=text;
				ne.$at=el.children[0];
			}
			else
			{
				ne.$at=text;
			}
			return ne;
		}
		function remove()
		{
			this.$at.remove();
		}
		function append(text)
		{
			if(typeof text === "string") this.$at.insertAdjacentHTML('beforeend', text);
			else if(text.$at!=undefined)this.$at.appendChild(text.$at);
			else this.$at.appendChild(text);
			return this;
		}
		function val(text)
		{
			if(text)
			{
				this.$at.value=text;
				return this;
			}
			return this.$at.value;
		}
		function hasClass(text)
		{
			return this.$at.classList.contains(text);
		}
		function aclass(text)
		{
			this.$at.classList.add(text);
			return this;
		}
		function rclass(text)
		{
			this.$at.classList.remove(text);
		}
		function sclass(text1,text2)
		{
			this.$at.classList.remove(text1);
			this.$at.classList.add(text2);
			return this;
		}
		function b(list, func)
		{
			for(var i=0; i<list.length;i++)
			{
				this.$at.addEventListener(list[i],func);
			}
		}
		
		function ub(list,func)
		{
			for(var i=0; i<list.length;i++)
			{
				this.$at.removeEventListener(list[i],func);
			}
		}
		function css(key,value)
		{
			if(value)
			{
				this.$at.style[key]=value;
				return this;
			}
			return this.$at.style[key];
		}
		function w(txt)
		{
			if(!txt)
			{
				return  this.$at.offsetWidth;
			}
			this.$at.style.width=txt;
		}
		function h(txt)
		{
			if(!txt)
			{
				return  this.$at.offsetHeight;
			}
			this.$at.style.height=txt;
		}
		
		
		function _new()
		{
			return {
				$at:null,
				$v:null,
				$count:null,
				at:at,
				a:a,
				s:s,
				html:html,
				attr:attr,
				rattr:rattr,
				create:create,
				remove:remove,
				append:append,
				val:val,
				hasClass:hasClass,
				aclass:aclass,
				rclass:rclass,
				sclass:sclass,
				b:b,
				ub:ub,
				css:css,
				w:w,
				h:h
			};
		}
		return _new();
	})();
$q.$at=document;

function euri(str)
{
	return encodeURIComponent(str);
}
function duri(str)
{
	return decodeURIComponent(str);
}


function $post(u, sdata, callback, error)
{
	var data = new FormData();
	for(var ss in sdata)
	{
		data.append(ss, sdata[ss]);
	}
	
	var xhr = new XMLHttpRequest();
	/*xhr.setRequestHeader("Content-Type",t);*/
	xhr.open('POST', u, true);
	xhr.onload = callback;
	xhr.onerror = error;
	xhr.send(data);
}
function $get(u, callback, error)
{
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', u, true);
	xhr.onload = callback;
	xhr.onerror = error;
	xhr.send();
}

function $postsync(u, t, sdata, callback, error)
{
	var data = new FormData();
	for(var ss in sdata)
	{
		data.append(ss, sdata[ss]);
	}
	var xhr = new XMLHttpRequest();
	xhr.setRequestHeader("Content-Type",t);
	xhr.open('POST', u, true);
	xhr.send(data);
	return xhr;
	
}
function $getsync(u, callback, error)
{
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', u, true);
	xhr.send();
	return xhr;
	
}











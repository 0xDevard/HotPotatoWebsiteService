(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{48026:function(t,e,s){Promise.resolve().then(s.t.bind(s,63385,23)),Promise.resolve().then(s.t.bind(s,43586,23)),Promise.resolve().then(s.bind(s,19151))},25752:function(t,e,s){"use strict";s.d(e,{S:function(){return l},v:function(){return d}});var i=s(96448),a=s(37538),r=s(10154),n=s(21254),o=s(22423),u=s(17364),h=s(945);let l="222794143f513944dd4f223742acd910";if(!l)throw Error("Project ID is not defined");let c=[n.R,o.O,u.F],d=(0,i.o)({chains:c,projectId:l,metadata:{name:"Hot Potato",description:"Discover the Thrill- Where Fortune Favors the Bold",url:"https://hotpotato.xyz",icons:["http://hotpotato.xyz/images/logo.png"]},ssr:!0,storage:(0,a.o)({storage:r.Dr}),transports:{[n.R.id]:(0,h.d)("https://eth-archival.rpc.grove.city/v1/73336ef7"),[u.F.id]:(0,h.d)("https://sepolia-archival.rpc.grove.city/v1/73336ef7"),[o.O.id]:(0,h.d)("http://127.0.0.1:8545")}})},19151:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return O}});var i=s(57437);s(2265);var a=s(25752),r=s(72065),n=s(46063),o=s(4668),u=s(45139),h=s(44614),l=class extends h.l{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,a=e.queryHash??(0,n.Rm)(i,e),r=this.get(a);return r||(r=new o.A({cache:this,queryKey:i,queryHash:a,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(r)),r}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){u.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,n._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,n._x)(t,e)):e}notify(t){u.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){u.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){u.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},c=s(2041),d=s(90326),f=class extends c.F{#e;#s;#i;#a;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.defaultOptions,this.#i=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#s,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#i.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#i.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#i.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#r({type:"pending",variables:t}),await this.#i.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t})}let s=await (this.#a=(0,d.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#a.promise);return await this.#i.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#i.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#r({type:"success",data:s}),s}catch(e){try{throw await this.#i.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#i.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,d.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),u.V.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#i.notify({mutation:this,type:"updated",action:t})})}},p=class extends h.l{constructor(t={}){super(),this.config=t,this.#n=[],this.#o=0}#n;#o;#u;build(t,e,s){let i=new f({mutationCache:this,mutationId:++this.#o,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#n.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#n=this.#n.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){u.V.batch(()=>{this.#n.forEach(t=>{this.remove(t)})})}getAll(){return this.#n}find(t){let e={exact:!0,...t};return this.#n.find(t=>(0,n.X7)(e,t))}findAll(t={}){return this.#n.filter(e=>(0,n.X7)(t,e))}notify(t){u.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#u=(this.#u??Promise.resolve()).then(()=>{let t=this.#n.filter(t=>t.state.isPaused);return u.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(n.ZT)),Promise.resolve()))}).then(()=>{this.#u=void 0}),this.#u}},y=s(79555),m=s(17211);function g(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}var v=class{#h;#i;#s;#l;#c;#d;#f;#p;constructor(t={}){this.#h=t.queryCache||new l,this.#i=t.mutationCache||new p,this.#s=t.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#f=y.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#h.onFocus())}),this.#p=m.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#h.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#f?.(),this.#f=void 0,this.#p?.(),this.#p=void 0)}isFetching(t){return this.#h.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#i.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#h.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#h.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#h.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),a=this.#h.get(i.queryHash),r=a?.state.data,o=(0,n.SE)(e,r);if(void 0!==o)return this.#h.build(this,i).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return u.V.batch(()=>this.#h.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#h.get(e.queryHash)?.state}removeQueries(t){let e=this.#h;u.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#h,i={type:"active",...t};return u.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(u.V.batch(()=>this.#h.findAll(t).map(t=>t.cancel(s)))).then(n.ZT).catch(n.ZT)}invalidateQueries(t={},e={}){return u.V.batch(()=>{if(this.#h.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(u.V.batch(()=>this.#h.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(n.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(n.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#h.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let i=async()=>{let s;let i=t.options,a=t.fetchOptions?.meta?.fetchMore?.direction,r=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},l=t.options.queryFn&&t.options.queryFn!==n.CN?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),c=async(e,s,i)=>{if(u)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let a={queryKey:t.queryKey,pageParam:s,direction:i?"backward":"forward",meta:t.options.meta};h(a);let r=await l(a),{maxPages:o}=t.options,c=i?n.Ht:n.VX;return{pages:c(e.pages,r,o),pageParams:c(e.pageParams,s,o)}};if(a&&r.length){let t="backward"===a,e={pages:r,pageParams:o},n=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:g)(i,e);s=await c(e,n,t)}else{s=await c({pages:[],pageParams:[]},o[0]??i.initialPageParam);let t=e??r.length;for(let e=1;e<t;e++){let t=g(i,s);s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=i}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return m.N.isOnline()?this.#i.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#h}getMutationCache(){return this.#i}getDefaultOptions(){return this.#s}setDefaultOptions(t){this.#s=t}setQueryDefaults(t,e){this.#l.set((0,n.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#l.values()],s={};return e.forEach(e=>{(0,n.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#c.set((0,n.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#c.values()],s={};return e.forEach(e=>{(0,n.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#s.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,n.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===n.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#s.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#h.clear(),this.#i.clear()}},b=s(47082),C=s(60604);let q=new v;if(!a.S)throw Error("Project ID is not defined");function O(t){let{children:e,initialState:s}=t;return(0,i.jsx)(C.F,{config:a.v,initialState:s,children:(0,i.jsx)(b.aH,{client:q,children:e})})}(0,r.OY)({wagmiConfig:a.v,projectId:a.S,enableAnalytics:!0,enableOnramp:!0})},63385:function(){},43586:function(t){t.exports={style:{fontFamily:"'__graphik_3a5b8a', '__graphik_Fallback_3a5b8a'"},className:"__className_3a5b8a",variable:"__variable_3a5b8a"}}},function(t){t.O(0,[66,971,69,744],function(){return t(t.s=48026)}),_N_E=t.O()}]);
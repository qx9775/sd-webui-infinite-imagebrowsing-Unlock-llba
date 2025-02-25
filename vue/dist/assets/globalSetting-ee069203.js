import{d as O,$ as z,r as N,m as te,n as G,S as b,T as y,c as a,a1 as s,a2 as e,z as d,a0 as v,Y as C,U as p,X as $,aI as ae,E as U,I as le,W as g,V as M,aa as T,aP as oe,ab as ne,a6 as F,a4 as se,ae as de,a3 as L,a7 as ue,aQ as ie,aR as re,aS as ce,aT as me,aM as pe,ai as B,ah as he,y as fe,Q as ge,Z as be}from"./index-291103b4.js";import{_ as R,a as K,F as _e}from"./numInput-30ccc2eb.js";import"./index-a2b6d909.js";/* empty css              *//* empty css              */import{_ as D}from"./index-89cb307c.js";import"./index-e0665346.js";import{t as ke,g as ve,C as Ce}from"./shortcut-9b128798.js";import{a as we}from"./functionalCallableComp-33cd562d.js";import"./Checkbox-12aa1d4b.js";const E="/infinite_image_browsing/fe-static/assets/sample-55dcafc6.webp",ye=["width","height","src"],Se=O({__name:"ImageSetting",setup(q){function l(S,r){return new Promise(h=>{const f=new Image;f.onload=()=>{const i=document.createElement("canvas");i.width=f.width*r,i.height=f.height*r,i.getContext("2d").drawImage(f,0,0,i.width,i.height),h(i.toDataURL())},f.src=S})}const u=z(),w=N("");return te(()=>[u.enableThumbnail,u.gridThumbnailResolution],G(async()=>{u.enableThumbnail&&(w.value=await l(E,u.gridThumbnailResolution/1024))},300),{immediate:!0,deep:!0}),(S,r)=>{const h=K,f=D;return b(),y($,null,[a(h,{label:e(d)("defaultGridCellWidth")},{default:s(()=>[a(R,{min:64,max:1024,step:16,modelValue:e(u).defaultGridCellWidth,"onUpdate:modelValue":r[0]||(r[0]=i=>e(u).defaultGridCellWidth=i)},null,8,["modelValue"])]),_:1},8,["label"]),a(h,{label:e(d)("useThumbnailPreview")},{default:s(()=>[a(f,{checked:e(u).enableThumbnail,"onUpdate:checked":r[1]||(r[1]=i=>e(u).enableThumbnail=i)},null,8,["checked"])]),_:1},8,["label"]),e(u).enableThumbnail?(b(),v(h,{key:0,label:e(d)("thumbnailResolution")},{default:s(()=>[a(R,{modelValue:e(u).gridThumbnailResolution,"onUpdate:modelValue":r[2]||(r[2]=i=>e(u).gridThumbnailResolution=i),min:256,max:1024,step:64},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0),a(h,{label:e(d)("livePreview")},{default:s(()=>[p("div",null,[p("img",{width:e(u).defaultGridCellWidth,height:e(u).defaultGridCellWidth,src:e(u).enableThumbnail?w.value:e(E)},null,8,ye)])]),_:1},8,["label"]),a(h,{label:e(d)("defaultShowChangeIndicators")},{default:s(()=>[a(f,{checked:e(u).defaultChangeIndchecked,"onUpdate:checked":r[3]||(r[3]=i=>e(u).defaultChangeIndchecked=i)},null,8,["checked"])]),_:1},8,["label"]),e(u).defaultChangeIndchecked?(b(),v(h,{key:1,label:e(d)("defaultSeedAsChange")},{default:s(()=>[a(f,{checked:e(u).defaultSeedChangeChecked,"onUpdate:checked":r[4]||(r[4]=i=>e(u).defaultSeedChangeChecked=i)},null,8,["checked"])]),_:1},8,["label"])):C("",!0),a(h,{label:e(d)("previewMaskBackgroundOpacity")},{default:s(()=>[a(R,{min:0,max:1,step:.05,modelValue:e(u).previewBgOpacity,"onUpdate:modelValue":r[5]||(r[5]=i=>e(u).previewBgOpacity=i)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}}),Ie={class:"panel"},Me={style:{"margin-top":"0"}},$e={class:"lang-select-wrap"},Re={style:{"padding-left":"8px",color:"#666"}},xe={class:"col"},Pe=O({__name:"globalSetting",setup(q){const l=z(),u=ae(),w=N(!1),S=async()=>{window.location.reload()},r=[{value:"en",text:"English"},{value:"zhHans",text:"简体中文"},{value:"zhHant",text:"繁體中文"},{value:"de",text:"Deutsch"}],h=G(o=>{const t=l.shortcut[o];["ctrl","shift"].includes(t.toLowerCase())&&(l.shortcut[o]="")},700),f=ke(()=>{fe.warn(d("notAllowSingleCtrlOrShiftAsShortcut"))},3e3),i=(o,t)=>{const m=ve(o);["ctrl","shift"].includes(m.toLowerCase())&&(f(),h(t)),m&&(l.shortcut[t]=m)},V=async()=>{await ie("shutdown_api_server_command"),await re.removeFile(ce),await me()},H=U(()=>[{value:"empty",text:d("emptyStartPage")},{value:"last-workspace-state",text:d("restoreLastWorkspaceState")},...u.snapshots.map(t=>({value:`workspace_snapshot_${t.id}`,text:d("restoreWorkspaceSnapshot",[t.name])}))]),W=U(()=>{const o=l.shortcut,t={};return Object.entries(o).forEach(([m,I])=>{var c;t[c=I+""]??(t[c]=0),t[I+""]++}),t}),Q=U(()=>{var t;const o=[{key:"download",label:d("download")},{key:"delete",label:d("deleteSelected")}];return(t=l.conf)==null||t.all_custom_tags.forEach(m=>{o.push({key:`toggle_tag_${m.name}`,label:d("toggleTagSelection",{tag:m.name})})}),l.quickMovePaths.forEach(m=>{o.push({key:`copy_to_${m.dir}`,label:d("copyTo")+" "+m.zh})}),l.quickMovePaths.forEach(m=>{o.push({key:`move_to_${m.dir}`,label:d("moveTo")+" "+m.zh})}),o}),j=o=>o&&o in W.value&&W.value[o]>1,x=le(ge+"disable_maximize",!1);return(o,t)=>{var A;const m=pe,I=B,c=K,k=D,X=R,P=B,Y=Ce,Z=he,J=_e;return b(),y("div",Ie,[(A=e(l).conf)!=null&&A.is_readonly?(b(),v(m,{key:0,message:o.$t("readonlyModeSettingPageDesc"),type:"warning"},null,8,["message"])):C("",!0),C("",!0),a(J,null,{default:s(()=>[p("h2",Me,g(e(d)("ImageBrowsingSettings")),1),a(Se),p("h2",null,g(e(d)("imgSearch")),1),a(c,{label:o.$t("rebuildImageIndex")},{default:s(()=>[a(I,{onClick:e(we)},{default:s(()=>[M(g(o.$t("start")),1)]),_:1},8,["onClick"])]),_:1},8,["label"]),p("h2",null,g(e(d)("autoRefresh")),1),a(c,{label:o.$t("autoRefreshWalkMode")},{default:s(()=>[a(k,{checked:e(l).autoRefreshWalkMode,"onUpdate:checked":t[0]||(t[0]=n=>e(l).autoRefreshWalkMode=n)},null,8,["checked"])]),_:1},8,["label"]),a(c,{label:o.$t("autoRefreshNormalFixedMode")},{default:s(()=>[a(k,{checked:e(l).autoRefreshNormalFixedMode,"onUpdate:checked":t[1]||(t[1]=n=>e(l).autoRefreshNormalFixedMode=n)},null,8,["checked"])]),_:1},8,["label"]),a(c,{label:e(d)("autoRefreshWalkModePosLimit")},{default:s(()=>[a(X,{min:0,max:1024,step:16,modelValue:e(l).autoRefreshWalkModePosLimit,"onUpdate:modelValue":t[2]||(t[2]=n=>e(l).autoRefreshWalkModePosLimit=n)},null,8,["modelValue"])]),_:1},8,["label"]),p("h2",null,g(e(d)("other")),1),a(c,{label:o.$t("lang")},{default:s(()=>[p("div",$e,[a(e(T),{options:r,value:e(l).lang,"onUpdate:value":t[3]||(t[3]=n=>e(l).lang=n),onChange:t[4]||(t[4]=n=>w.value=!0)},null,8,["value"])]),w.value?(b(),v(P,{key:0,type:"primary",onClick:S,ghost:""},{default:s(()=>[M(g(e(d)("langChangeReload")),1)]),_:1})):C("",!0)]),_:1},8,["label"]),a(c,{label:o.$t("onlyFoldersAndImages")},{default:s(()=>[a(k,{checked:e(l).onlyFoldersAndImages,"onUpdate:checked":t[5]||(t[5]=n=>e(l).onlyFoldersAndImages=n)},null,8,["checked"])]),_:1},8,["label"]),a(c,{label:o.$t("showCommaInGenInfoPanel")},{default:s(()=>[a(k,{checked:e(l).showCommaInInfoPanel,"onUpdate:checked":t[6]||(t[6]=n=>e(l).showCommaInInfoPanel=n)},null,8,["checked"])]),_:1},8,["label"]),a(c,{label:o.$t("defaultSortingMethod")},{default:s(()=>[a(e(T),{value:e(l).defaultSortingMethod,"onUpdate:value":t[7]||(t[7]=n=>e(l).defaultSortingMethod=n),conv:e(oe),options:e(ne)},null,8,["value","conv","options"])]),_:1},8,["label"]),a(c,{label:o.$t("longPressOpenContextMenu")},{default:s(()=>[a(k,{checked:e(l).longPressOpenContextMenu,"onUpdate:checked":t[8]||(t[8]=n=>e(l).longPressOpenContextMenu=n)},null,8,["checked"])]),_:1},8,["label"]),a(c,{label:o.$t("openOnAppStart")},{default:s(()=>[a(e(T),{value:e(l).defaultInitinalPage,"onUpdate:value":t[9]||(t[9]=n=>e(l).defaultInitinalPage=n),options:H.value},null,8,["value","options"])]),_:1},8,["label"]),(b(!0),y($,null,F(e(l).ignoredConfirmActions,(n,_)=>(b(),v(c,{label:o.$t(_+"SkipConfirm"),key:_},{default:s(()=>[a(Y,{checked:e(l).ignoredConfirmActions[_],"onUpdate:checked":ee=>e(l).ignoredConfirmActions[_]=ee},null,8,["checked","onUpdate:checked"])]),_:2},1032,["label"]))),128)),a(c,{label:o.$t("disableMaximize")},{default:s(()=>[a(k,{checked:e(x),"onUpdate:checked":t[10]||(t[10]=n=>se(x)?x.value=n:null)},null,8,["checked"]),p("sub",Re,g(o.$t("takeEffectAfterReloadPage")),1)]),_:1},8,["label"]),p("h2",null,g(e(d)("shortcutKey")),1),(b(!0),y($,null,F(Q.value,n=>(b(),v(c,{label:n.label,key:n.key},{default:s(()=>[p("div",{class:de(["col",{conflict:j(e(l).shortcut[n.key]+"")}]),onKeydown:t[11]||(t[11]=L(()=>{},["stop","prevent"]))},[a(Z,{value:e(l).shortcut[n.key],onKeydown:L(_=>i(_,n.key),["stop","prevent"]),placeholder:o.$t("shortcutKeyDescription")},null,8,["value","onKeydown","placeholder"]),a(P,{onClick:_=>e(l).shortcut[n.key]="",class:"clear-btn"},{default:s(()=>[M(g(o.$t("clear")),1)]),_:2},1032,["onClick"])],34)]),_:2},1032,["label"]))),128)),e(ue)?(b(),y($,{key:0},[p("h2",null,g(e(d)("clientSpecificSettings")),1),a(c,null,{default:s(()=>[p("div",xe,[a(P,{onClick:V,class:"clear-btn"},{default:s(()=>[M(g(o.$t("initiateSoftwareStartupConfig")),1)]),_:1})])]),_:1})],64)):C("",!0)]),_:1})])}}});const ze=be(Pe,[["__scopeId","data-v-6af57e34"]]);export{ze as default};

"use strict";(self["webpackChunkanimal_finder_client"]=self["webpackChunkanimal_finder_client"]||[]).push([[885],{27:(e,t,a)=>{a.d(t,{C:()=>l});const l={apiUrl:"https://api-animalfinder.urbanodata.com.br"}},6885:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var l=a(3673),o=a(2323),n=a(8880);const s={class:"row main--row"},r=(0,l.Wm)("div",{class:"col-12"},[(0,l.Wm)("h3",null," Seu animais cadastrados ")],-1),d={class:"col-12"},i={class:"pets--table "},m=(0,l.Wm)("tr",null,[(0,l.Wm)("th",{class:"mobile-hide"},"Codigo"),(0,l.Wm)("th",null,"Nome"),(0,l.Wm)("th",{class:"mobile-hide"},"Idade"),(0,l.Wm)("th",{class:"mobile-hide"},"Status"),(0,l.Wm)("th",{class:"mobile-hide"},"Informacoes"),(0,l.Wm)("th",{class:"col-lg-2"})],-1),u={class:"mobile-hide"},p=(0,l.Wm)("br",null,null,-1),c={class:"mobile-only"},g=(0,l.Wm)("br",null,null,-1),h={key:0,class:"mobile-only text-red"},w={key:1,class:"mobile-only text-orange"},f={key:2,class:"mobile-only text-green"},W={class:"mobile-only"},y={class:"mobile-hide"},P={class:"mobile-hide"},k={key:0,class:"text-red"},C={key:1,class:"text-orange"},b={key:2,class:"text-green"},q={class:"mobile-hide"},j={class:"q-pa-md q-gutter-sm"},V=(0,l.Wm)("div",{class:"text-h6"},"Cadastrar animal desaparecido",-1),_={key:0,class:"error--list"},v={key:0,class:"error--list"},U={key:0,class:"error--list"},z={key:0,class:"error--list"},Z=(0,l.Wm)("div",{class:"text-h6"},"Cadastrar foto do animal",-1),x=(0,l.Wm)("span",{class:"q-ml-sm"},"Confirmar excluir animal?",-1),D=(0,l.Wm)("span",{class:"q-ml-sm"},"Confirmar animal encontrado?",-1);function I(e,t,a,I,A,K){const S=(0,l.up)("q-btn"),Q=(0,l.up)("q-page"),O=(0,l.up)("q-card-section"),F=(0,l.up)("q-input"),H=(0,l.up)("q-card-actions"),T=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),E=(0,l.up)("q-file"),N=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(l.HY,null,[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",s,[r,(0,l.Wm)("div",d,[(0,l.Wm)("table",i,[m,((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.data.pets,(t=>((0,l.wg)(),(0,l.j4)("tr",{key:t.id},[(0,l.Wm)("td",u,(0,o.zw)(t.id),1),(0,l.Wm)("td",null,[(0,l.Wm)("strong",null,(0,o.zw)(t.name),1),p,(0,l.Wm)("label",c,"Idade: "+(0,o.zw)(t.age),1),g,1==t.status?((0,l.wg)(),(0,l.j4)("strong",h,"Perdido")):(0,l.kq)("",!0),2==t.status?((0,l.wg)(),(0,l.j4)("strong",w,"Comunicado")):(0,l.kq)("",!0),3==t.status?((0,l.wg)(),(0,l.j4)("strong",f,"Encontrato")):(0,l.kq)("",!0),(0,l.Wm)("p",W,"Info: "+(0,o.zw)(t.information),1)]),(0,l.Wm)("td",y,(0,o.zw)(t.age),1),(0,l.Wm)("td",P,[1==t.status?((0,l.wg)(),(0,l.j4)("strong",k,"Perdido")):(0,l.kq)("",!0),2==t.status?((0,l.wg)(),(0,l.j4)("strong",C,"Comunicado")):(0,l.kq)("",!0),3==t.status?((0,l.wg)(),(0,l.j4)("strong",b,"Encontrato")):(0,l.kq)("",!0)]),(0,l.Wm)("td",q,(0,o.zw)(t.information),1),(0,l.Wm)("td",null,[(0,l.Wm)("div",j,[3!=t.status?((0,l.wg)(),(0,l.j4)(S,{key:0,color:"blue",icon:"image",onClick:a=>{e.addPetImagePrompt=!0,e.pet=t}},null,8,["onClick"])):(0,l.kq)("",!0),3!=t.status?((0,l.wg)(),(0,l.j4)(S,{key:1,color:"blue",icon:"done",onClick:a=>{e.foundPetPrompt=!0,e.pet=t}},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(S,{color:"red",icon:"delete",onClick:a=>{e.deletPetPrompt=!0,e.pet=t}},null,8,["onClick"])])])])))),128))])])]),(0,l.Wm)(S,{color:"green",icon:"add",class:"bet--add--pet",onClick:t[1]||(t[1]=t=>e.addPetPrompt=!0)})])),_:1}),(0,l.Wm)(Y,{modelValue:e.addPetPrompt,"onUpdate:modelValue":t[13]||(t[13]=t=>e.addPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[V])),_:1}),(0,l.Wm)(O,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{dense:"",modelValue:e.pet.name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.pet.name=t),placeholder:"Digite o nome do animal",autofocus:"",onKeyup:t[3]||(t[3]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("name")?((0,l.wg)(),(0,l.j4)("ul",_,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.name,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(O,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{dense:"",modelValue:e.pet.age,"onUpdate:modelValue":t[4]||(t[4]=t=>e.pet.age=t),type:"number",placeholder:"Idade do animal",autofocus:"",onKeyup:t[5]||(t[5]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("age")?((0,l.wg)(),(0,l.j4)("ul",v,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.age,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(O,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{dense:"",modelValue:e.pet.state,"onUpdate:modelValue":t[6]||(t[6]=t=>e.pet.state=t),placeholder:"Estado em que desapareceu (ex: Sao Paulo)",autofocus:"",onKeyup:t[7]||(t[7]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("state")?((0,l.wg)(),(0,l.j4)("ul",U,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.state,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(O,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{dense:"",modelValue:e.pet.city,"onUpdate:modelValue":t[8]||(t[8]=t=>e.pet.city=t),placeholder:"Cidade em que desapareceu (ex: Santos)",autofocus:"",onKeyup:t[9]||(t[9]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("city")?((0,l.wg)(),(0,l.j4)("ul",z,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.city,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(O,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{dense:"",modelValue:e.pet.information,"onUpdate:modelValue":t[10]||(t[10]=t=>e.pet.information=t),placeholder:"Digite aqui outros informacoes relevantes",autofocus:"",onKeyup:t[11]||(t[11]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"])])),_:1}),(0,l.Wm)(H,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(S,{flat:"",label:"Cancelar"},null,512),[[N]]),(0,l.Wm)(S,{flat:"",label:"Cadastrar",onClick:t[12]||(t[12]=t=>e.addPet())})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:e.addPetImagePrompt,"onUpdate:modelValue":t[16]||(t[16]=t=>e.addPetImagePrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[Z])),_:1}),(0,l.Wm)(O,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{filled:"",onChange:t[14]||(t[14]=t=>e.handleFileUpload(t)),label:"Selecione foto do animal"})])),_:1}),(0,l.Wm)(H,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(S,{flat:"",label:"Cancelar"},null,512),[[N]]),(0,l.Wm)(S,{flat:"",label:"Cadastrar",onClick:t[15]||(t[15]=t=>e.addPetImage())})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:e.deletPetPrompt,"onUpdate:modelValue":t[18]||(t[18]=t=>e.deletPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"row items-center"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(H,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(S,{flat:"",label:"Cancelar",color:"primary"},null,512),[[N]]),(0,l.wy)((0,l.Wm)(S,{flat:"",label:"Confirmar",color:"primary",onClick:t[17]||(t[17]=t=>e.deletePet())},null,512),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:e.foundPetPrompt,"onUpdate:modelValue":t[20]||(t[20]=t=>e.foundPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"row items-center"},{default:(0,l.w5)((()=>[D])),_:1}),(0,l.Wm)(H,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(S,{flat:"",label:"Cancelar",color:"primary"},null,512),[[N]]),(0,l.wy)((0,l.Wm)(S,{flat:"",label:"Confirmar",color:"primary",onClick:t[19]||(t[19]=t=>e.foundPet())},null,512),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var A=a(6417),K=a(27);const S=a(52).default,Q=K.C.apiUrl,O=(0,l.aZ)({name:"PageAccount",components:{},data(){return{token:null,apiUrl:Q,data:{},pet:{name:null,age:0,state:null,city:null,information:null,errors:{}},addPetPrompt:!1,addPetImagePrompt:!1,deletPetPrompt:!1,foundPetPrompt:!1}},mounted(){"success"===this.$route.query.login&&A.Z.create({type:"positive",message:"Logado com sucesso!!"}),this.token=window.localStorage.getItem("token"),this.token?this.getUserData():(window.location.href="#/?login=do",A.Z.create({type:"negative",message:"Faca login para Area restrita!"}))},methods:{getUserData(){S.get(Q+"/api/v1/users",{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{this.data=e.data})).catch((e=>{window.localStorage.clear("token"),"Signature verification raised"===e.response.data.errors&&(window.location.href="/?login=do",A.Z.create({type:"negative",message:"Faca login para Area restrita!"}))}))},deletePet(){S.delete(Q+"/api/v1/pets/"+this.pet.id,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{this.getUserData()}))},foundPet(){S.patch(Q+"/api/v1/pets/found/"+this.pet.id,{},{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{A.Z.create({type:"positive",message:"Animal atualizado para ENCONTRADO!"}),this.getUserData()})).catch((e=>{console.log(e)}))},addPet(){const e=JSON.stringify({pet:this.pet});S.post(Q+"/api/v1/pets",e,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{A.Z.create({type:"positive",message:"Pet cadastrado com sucesso"}),this.addPetPrompt=!1,this.getUserData()})).catch((e=>{A.Z.create({type:"negative",message:"Erro ao salvar pet"}),this.pet.errors=e.response.data}))},handleFileUpload(e){this.pet.image=e.target.files[0]},addPetImage(){const e=new FormData;e.append("image",this.pet.image),S.patch(Q+"/api/v1/pets/image/"+this.pet.id,e,{headers:{"Content-Type":"multipart/form-data",Authorization:this.token}}).then((e=>{})).catch((e=>{console.log(e)}))}}});var F=a(4379),H=a(9892),T=a(2134),Y=a(151),E=a(5589),N=a(2426),B=a(9367),J=a(9116),L=a(677),R=a(7518),$=a.n(R);O.render=I;const G=O;$()(O,"components",{QPage:F.Z,QBtn:H.Z,QDialog:T.Z,QCard:Y.Z,QCardSection:E.Z,QInput:N.Z,QCardActions:B.Z,QFile:J.Z}),$()(O,"directives",{ClosePopup:L.Z})}}]);
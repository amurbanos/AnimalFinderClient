"use strict";(self["webpackChunkanimal_finder_client"]=self["webpackChunkanimal_finder_client"]||[]).push([[61],{27:(e,t,a)=>{a.d(t,{C:()=>l});const l={apiUrl:"https://api-animalfinder.urbanodata.com.br"}},5061:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var l=a(3673),o=a(2323),n=a(8880);const s={class:"row main--row"},r=(0,l.Wm)("div",{class:"col-12"},[(0,l.Wm)("h3",null," Seu animais cadastrados ")],-1),d={class:"col-12"},i={class:"pets--table "},m=(0,l.Wm)("tr",null,[(0,l.Wm)("th",{class:"mobile-hide"},"Codigo"),(0,l.Wm)("th",{style:{"min-width":"150px"}},"Nome"),(0,l.Wm)("th",{class:"mobile-hide"},"Idade"),(0,l.Wm)("th",{class:"mobile-hide"},"Status"),(0,l.Wm)("th",{class:"mobile-hide"},"Comunicado por"),(0,l.Wm)("th",{class:"col-lg-2"})],-1),u={class:"mobile-hide"},p=(0,l.Wm)("br",null,null,-1),c={class:"mobile-only"},g=(0,l.Wm)("br",null,null,-1),w={key:0,class:"mobile-only text-red"},h={key:1,class:"mobile-only text-green"},f={class:"mobile-only"},y={class:"mobile-only"},W={key:2,class:"mobile-only text-orange"},P=(0,l.Uk)(),k=(0,l.Wm)("br",null,null,-1),C={key:3,class:"mobile-only"},b={class:"mobile-hide"},q={class:"mobile-hide"},_={key:0,class:"text-red"},V={key:1,class:"text-orange"},j={key:2,class:"text-green"},v={class:"mobile-hide"},z={class:"q-pa-md q-gutter-sm"},U=(0,l.Wm)("div",{class:"text-h6"},"Cadastrar animal desaparecido",-1),Z={key:0,class:"error--list"},x={key:0,class:"error--list"},D={key:0,class:"error--list"},I={key:0,class:"error--list"},A=(0,l.Wm)("div",{class:"text-h6"},"Cadastrar foto do animal",-1),K=(0,l.Wm)("span",{class:"q-ml-sm"},"Confirmar excluir animal?",-1),S=(0,l.Wm)("span",{class:"q-ml-sm"},"Confirmar animal encontrado?",-1);function Q(e,t,a,Q,F,O){const E=(0,l.up)("q-btn"),H=(0,l.up)("q-page"),T=(0,l.up)("q-card-section"),Y=(0,l.up)("q-input"),N=(0,l.up)("q-card-actions"),B=(0,l.up)("q-card"),J=(0,l.up)("q-dialog"),L=(0,l.up)("q-file"),R=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(l.HY,null,[(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",s,[r,(0,l.Wm)("div",d,[(0,l.Wm)("table",i,[m,((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.data.pets,(t=>((0,l.wg)(),(0,l.j4)("tr",{key:t.id},[(0,l.Wm)("td",u,(0,o.zw)(t.id),1),(0,l.Wm)("td",null,[(0,l.Wm)("strong",null,(0,o.zw)(t.name),1),p,(0,l.Wm)("label",c,"Idade: "+(0,o.zw)(t.age),1),g,1==t.status?((0,l.wg)(),(0,l.j4)("strong",w,"Perdido")):(0,l.kq)("",!0),3==t.status?((0,l.wg)(),(0,l.j4)("strong",h,"Encontrato")):(0,l.kq)("",!0),(0,l.Wm)("p",f,(0,o.zw)(t.information),1),(0,l.Wm)("p",y,(0,o.zw)(t.city)+" - "+(0,o.zw)(t.state),1),2==t.status?((0,l.wg)(),(0,l.j4)("strong",W,"Comunicado")):(0,l.kq)("",!0),P,k,2==t.status?((0,l.wg)(),(0,l.j4)("strong",C,(0,o.zw)(t.found_name)+" - "+(0,o.zw)(t.found_phone),1)):(0,l.kq)("",!0)]),(0,l.Wm)("td",b,(0,o.zw)(t.age),1),(0,l.Wm)("td",q,[1==t.status?((0,l.wg)(),(0,l.j4)("strong",_,"Perdido")):(0,l.kq)("",!0),2==t.status?((0,l.wg)(),(0,l.j4)("strong",V,"Comunicado")):(0,l.kq)("",!0),3==t.status?((0,l.wg)(),(0,l.j4)("strong",j,"Encontrato")):(0,l.kq)("",!0)]),(0,l.Wm)("td",v,(0,o.zw)(t.found_name)+" - "+(0,o.zw)(t.found_phone),1),(0,l.Wm)("td",null,[(0,l.Wm)("div",z,[3!=t.status?((0,l.wg)(),(0,l.j4)(E,{key:0,color:"blue",icon:"image",onClick:a=>{e.addPetImagePrompt=!0,e.pet=t}},null,8,["onClick"])):(0,l.kq)("",!0),3!=t.status?((0,l.wg)(),(0,l.j4)(E,{key:1,color:"blue",icon:"done",onClick:a=>{e.foundPetPrompt=!0,e.pet=t}},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(E,{color:"red",icon:"delete",onClick:a=>{e.deletPetPrompt=!0,e.pet=t}},null,8,["onClick"])])])])))),128))])])]),(0,l.Wm)(E,{color:"green",icon:"add",class:"bet--add--pet",onClick:t[1]||(t[1]=t=>e.addPetPrompt=!0)})])),_:1}),(0,l.Wm)(J,{modelValue:e.addPetPrompt,"onUpdate:modelValue":t[13]||(t[13]=t=>e.addPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[U])),_:1}),(0,l.Wm)(T,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{dense:"",modelValue:e.pet.name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.pet.name=t),placeholder:"Digite o nome do animal",autofocus:"",onKeyup:t[3]||(t[3]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("name")?((0,l.wg)(),(0,l.j4)("ul",Z,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.name,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(T,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{dense:"",modelValue:e.pet.age,"onUpdate:modelValue":t[4]||(t[4]=t=>e.pet.age=t),type:"number",placeholder:"Idade do animal",autofocus:"",onKeyup:t[5]||(t[5]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("age")?((0,l.wg)(),(0,l.j4)("ul",x,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.age,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(T,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{dense:"",modelValue:e.pet.state,"onUpdate:modelValue":t[6]||(t[6]=t=>e.pet.state=t),placeholder:"Estado em que desapareceu (ex: Sao Paulo)",autofocus:"",onKeyup:t[7]||(t[7]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("state")?((0,l.wg)(),(0,l.j4)("ul",D,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.state,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(T,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{dense:"",modelValue:e.pet.city,"onUpdate:modelValue":t[8]||(t[8]=t=>e.pet.city=t),placeholder:"Cidade em que desapareceu (ex: Santos)",autofocus:"",onKeyup:t[9]||(t[9]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("city")?((0,l.wg)(),(0,l.j4)("ul",I,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.city,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(T,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{dense:"",modelValue:e.pet.information,"onUpdate:modelValue":t[10]||(t[10]=t=>e.pet.information=t),placeholder:"Digite aqui outros informacoes relevantes",autofocus:"",onKeyup:t[11]||(t[11]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"])])),_:1}),(0,l.Wm)(N,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Cancelar"},null,512),[[R]]),(0,l.Wm)(E,{flat:"",label:"Cadastrar",onClick:t[12]||(t[12]=t=>e.addPet())})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(J,{modelValue:e.addPetImagePrompt,"onUpdate:modelValue":t[17]||(t[17]=t=>e.addPetImagePrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[A])),_:1}),(0,l.Wm)(T,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{filled:"",onChange:t[14]||(t[14]=t=>e.handleFileUpload(t)),modelValue:e.pet.src,"onUpdate:modelValue":t[15]||(t[15]=t=>e.pet.src=t),label:"Selecione foto do animal",accept:".jpg, image/*"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(N,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Cancelar"},null,512),[[R]]),(0,l.Wm)(E,{flat:"",label:"Cadastrar",onClick:t[16]||(t[16]=t=>e.addPetImage())})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(J,{modelValue:e.deletPetPrompt,"onUpdate:modelValue":t[19]||(t[19]=t=>e.deletPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"row items-center"},{default:(0,l.w5)((()=>[K])),_:1}),(0,l.Wm)(N,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Cancelar",color:"primary"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Confirmar",color:"primary",onClick:t[18]||(t[18]=t=>e.deletePet())},null,512),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(J,{modelValue:e.foundPetPrompt,"onUpdate:modelValue":t[21]||(t[21]=t=>e.foundPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"row items-center"},{default:(0,l.w5)((()=>[S])),_:1}),(0,l.Wm)(N,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Cancelar",color:"primary"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Confirmar",color:"primary",onClick:t[20]||(t[20]=t=>e.foundPet())},null,512),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var F=a(6417),O=a(27);const E=a(52).default,H=O.C.apiUrl,T=(0,l.aZ)({name:"PageAccount",components:{},data(){return{token:null,apiUrl:H,data:{},pet:{name:null,age:0,state:null,city:null,information:null,errors:{}},addPetPrompt:!1,addPetImagePrompt:!1,deletPetPrompt:!1,foundPetPrompt:!1}},mounted(){"success"===this.$route.query.login&&F.Z.create({type:"positive",message:"Logado com sucesso!!"}),this.token=window.localStorage.getItem("token"),this.token?this.getUserData():(window.location.href="#/?login=do",F.Z.create({type:"negative",message:"Faca login para Area restrita!"}))},methods:{getUserData(){E.get(H+"/api/v1/users",{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{this.data=e.data})).catch((e=>{window.localStorage.clear("token"),"Signature verification raised"===e.response.data.errors&&(window.location.href="/?login=do",F.Z.create({type:"negative",message:"Faca login para Area restrita!"}))}))},deletePet(){E.delete(H+"/api/v1/pets/"+this.pet.id,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{this.getUserData()}))},foundPet(){E.patch(H+"/api/v1/pets/found/"+this.pet.id,{},{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{F.Z.create({type:"positive",message:"Animal atualizado para ENCONTRADO!"}),this.getUserData()})).catch((e=>{console.log(e)}))},addPet(){const e=JSON.stringify({pet:this.pet});E.post(H+"/api/v1/pets",e,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{F.Z.create({type:"positive",message:"Pet cadastrado com sucesso"}),this.addPetPrompt=!1,this.getUserData()})).catch((e=>{F.Z.create({type:"negative",message:"Erro ao salvar pet"}),this.pet.errors=e.response.data}))},handleFileUpload(e){this.pet.image=e.target.files[0]},addPetImage(){const e=new FormData;e.append("image",this.pet.image),E.patch(H+"/api/v1/pets/image/"+this.pet.id,e,{headers:{"Content-Type":"multipart/form-data",Authorization:this.token}}).then((e=>{F.Z.create({type:"positive",message:"Foto salva com sucesso!"}),this.addPetImagePrompt=!1,this.pet.src=null})).catch((e=>{F.Z.create({type:"negative",message:"Erro ao salvar!"}),console.log(e)}))}}});var Y=a(4379),N=a(9892),B=a(2134),J=a(151),L=a(5589),R=a(2426),$=a(9367),G=a(9116),M=a(677),X=a(7518),ee=a.n(X);T.render=Q;const te=T;ee()(T,"components",{QPage:Y.Z,QBtn:N.Z,QDialog:B.Z,QCard:J.Z,QCardSection:L.Z,QInput:R.Z,QCardActions:$.Z,QFile:G.Z}),ee()(T,"directives",{ClosePopup:M.Z})}}]);
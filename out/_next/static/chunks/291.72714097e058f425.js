"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{61291:function(t,e,n){n.d(e,{SIWEController:function(){return r}});var i=n(87180);n(79268);var s=n(37967),a=n(4776);let l=(0,a.sj)({status:"uninitialized"}),r={state:l,subscribeKey:(t,e)=>(0,s.VW)(l,t,e),subscribe:t=>(0,a.Ld)(l,()=>t(l)),_getClient(){if(!l._client)throw Error("SIWEController client not set");return l._client},async getNonce(t){let e=this._getClient(),n=await e.getNonce(t);return this.setNonce(n),n},async getSession(){let t=this._getClient(),e=await t.getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){let e=this._getClient().createMessage(t);return this.setMessage(e),e},async verifyMessage(t){let e=this._getClient();return await e.verifyMessage(t)},async signIn(){let t=this._getClient();return await t.signIn()},async signOut(){let t=this._getClient();await t.signOut(),this.setStatus("ready"),t.onSignOut?.()},onSignIn(t){let e=this._getClient();e.onSignIn?.(t)},onSignOut(){let t=this._getClient();t.onSignOut?.()},setSIWEClient(t){l._client=(0,a.iH)(t),l.status="ready",i.OptionsController.setIsSiweEnabled(t.options.enabled)},setNonce(t){l.nonce=t},setStatus(t){l.status=t},setMessage(t){l.message=t},setSession(t){l.session=t}};var o=n(97637),c=n(66848),u=c.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let g=class extends c.oi{constructor(){super(...arguments),this.dappImageUrl=i.OptionsController.state.metadata?.icons,this.walletImageUrl=i.MO.getConnectedWalletImageUrl()}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return c.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};g.styles=u,g=function(t,e,n,i){var s,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(l=(a<3?s(l):a>3?s(e,n,l):s(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l}([(0,o.customElement)("w3m-connecting-siwe")],g);var d=n(9845),w=function(t,e,n,i){var s,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(l=(a<3?s(l):a>3?s(e,n,l):s(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l};let h=class extends c.oi{constructor(){super(...arguments),this.dappName=i.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return c.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,i.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{r.setStatus("loading");let t=await r.signIn();return r.setStatus("success"),i.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),t}catch(t){return i.SnackController.showError("Signature declined"),r.setStatus("error"),i.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:t}=i.AccountController.state;t?(await i.ConnectionController.disconnect(),i.IN.close()):i.RouterController.push("Connect"),i.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};w([(0,d.SB)()],h.prototype,"isSigning",void 0),w([(0,o.customElement)("w3m-connecting-siwe-view")],h)}}]);
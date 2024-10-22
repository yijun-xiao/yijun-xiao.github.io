(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{10:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},108:function(e){e.exports=JSON.parse('{"":{"title":"","author":"","booktitle":"","image":"","year":202,"tags":[""],"badge":"","showhome":false,"highlight":false,"abstract":"","bibtex":"","url":"","code":"","website":"","video":"","poster":""},"xu2023patch":{"title":"PatchZero: Defending against Adversarial Patch Attacks by Detecting and Zeroing the Patch","author":"Ke Xu*, <b>Yao Xiao</b>*, Zhaoheng Zheng, Kaijie Cai, Ram Nevatia.","booktitle":"IEEE/CVF Winter Conference on Applications of Computer Vision (<b>WACV</b>), 2023.","image":"/publications/xu2023patch.png","year":"2023","url":"https://openaccess.thecvf.com/content/WACV2023/papers/Xu_PatchZero_Defending_Against_Adversarial_Patch_Attacks_by_Detecting_and_Zeroing_WACV_2023_paper.pdf","tags":["Robustness"],"badge":"WACV 2023","showhome":true,"highlight":true,"bibtex":"@article{xu2022patchzero,</br>  title={PatchZero: Defending against Adversarial Patch Attacks by Detecting and Zeroing the Patch},</br>  author={Xu, Ke and Xiao, Yao and Zheng, Zhaoheng and Cai, Kaijie and Nevatia, Ram},</br>  journal={arXiv preprint arXiv:2207.01795},</br>  year={2022}</br>}","abstract":"We propose PatchZero, a task-agnostic defense that is compatible with multiple downstream models. Specifically, our defense detects the adversarial pixels and “zeros out” the patch region by repainting with mean pixel values. We formulate the patch detection problem as a semantic segmentation task such that our model can generalize to patches of any size and shape. We further design a two-stage adversarial training scheme to defend against the stronger adaptive attacks. Our method achieves state-of-the-art robust ac-curacy without any degrade in the benign performance."},"ge2023encouraging":{"title":"Encouraging Disentangled and Convex Representation with Controllable Interpolation Regularization","author":"Yunhao Ge, Zhi Xu, <b>Yao Xiao</b>, Gan Xin, Yunkui Pang, Laurent Itti.","booktitle":"IEEE/CVF Winter Conference on Applications of Computer Vision (<b>WACV</b>), 2023.","image":"/publications/ge2023encouraging.png","year":"2023","badge":"WACV 2023","tags":["Others"],"bibtex":"@article{ge2021encouraging,</br>title={Encouraging Disentangled and Convex Representation with Controllable Interpolation Regularization},</br>author={Ge, Yunhao and Xu, Zhi and Xiao, Yao and Xin, Gan and Pang, Yunkui and Itti, Laurent},</br>journal={arXiv preprint arXiv:2112.03163},</br>year={2021}</br>}","url":"https://openaccess.thecvf.com/content/WACV2023/papers/Ge_Encouraging_Disentangled_and_Convex_Representation_With_Controllable_Interpolation_Regularization_WACV_2023_paper.pdf","abstract":"We propose Controllable Interpolation Regularization (CIR), a general module compatible with different algorithms that have auto-encoder structure, to encourage more convex and robust disentangled representation learning. Qualitative and quantitative experiments show improvement in disentangled representation learning and latent convexity by CIR, which helps achieve state-of-the-art attribute controllable image synthesis. Additional experiments demonstrate that CIR can also improve other downstream tasks, such as new attribute value mining, data augmentation, and eliminating dataset bias for fairness."},"ge2022contributions":{"title":"Contributions of Shape, Texture, and Color in Visual Recognition","author":"Yunhao Ge*, <b>Yao Xiao</b>*, Zhi Xu, Xingrui Wang, Laurent Itti.","booktitle":"European Conference on Computer Vision (<b>ECCV</b>), 2022.","image":"/publications/ge2022contributions.png","year":2022,"badge":"ECCV 2022","tags":["ExplainableAI"],"highlight":true,"showhome":true,"bibtex":"@inproceedings{ge2022contributions,</br>  title={Contributions of Shape, Texture, and Color in Visual Recognition},</br>  author={Ge, Yunhao and Xiao, Yao and Xu, Zhi and Wang, Xingrui and Itti, Laurent},</br>  booktitle={European Conference on Computer Vision},</br>  pages={369--386},</br>  year={2022},</br>  organization={Springer}</br>}","url":"https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136720364.pdf","code":"https://github.com/gyhandy/Humanoid-Vision-Engine","abstract":"We investigate the contributions of three important features of the human visual system (HVS) — shape, texture, and color — to object classification. We build a humanoid vision engine (HVE) that explicitly and separately computes shape, texture, and color features from images. We show that HVE can summarize and rank-order the contributions of the three features to object recognition. With the help of HVE, given any environment (dataset), we can summarize the most important features for the whole task and for each class."},"ge2021peek":{"title":"A Peek Into the Reasoning of Neural Networks: Interpreting with Structural Visual Concepts","author":"Yunhao Ge, <b>Yao Xiao</b>, Zhi Xu, Meng Zheng, Srikrishna Karanam, Terrence Chen, Laurent Itti and Ziyan Wu.","booktitle":"IEEE/ CVF International Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2021.","image":"/publications/ge2021peek.png","year":2021,"tags":["ExplainableAI"],"badge":"CVPR 2021","bibtex":"@inproceedings{ge2021peek,</br>title={A Peek Into the Reasoning of Neural Networks: Interpreting with Structural Visual Concepts},</br>author={Ge, Yunhao and Xiao, Yao and Xu, Zhi and Zheng, Meng and Karanam, Srikrishna and Chen, Terrence and Itti, Laurent and Wu, Ziyan},</br>booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},</br>pages={2195--2204},</br>year={2021}</br>}","url":"https://openaccess.thecvf.com/content/CVPR2021/papers/Ge_A_Peek_Into_the_Reasoning_of_Neural_Networks_Interpreting_With_CVPR_2021_paper.pdf","code":"https://github.com/gyhandy/Visual-Reasoning-eXplanation","website":"http://ilab.usc.edu/andy/vrx","video":"https://www.youtube.com/watch?v=ZzkpUrK-cRA","poster":"/publications/ge2021peek_poster.pdf","abstract":"We propose a framework (VRX) to interpret classification NNs with intuitive structural visual concepts. Given a trained classification model, the proposed VRX extracts relevant class-specific visual concepts and organizes them using structural concept graphs (SCG) based on pairwise concept relationships. By means of knowledge distillation, we show VRX can take a step towards mimicking the reasoning process of NNs and provide logical, concept-level explanations for final model decisions."},"yin2021contrastive":{"title":"Contrastive Learning for Domain Transfer in Cross-Corpus Emotion Recognition","author":"Yufeng Yin, Liupei Lu, <b>Yao Xiao</b>, Zhi Xu, Kaijie Cai, Haonan Jiang, Jonathan Gratch, Mohammad Soleymani.","booktitle":"The 9th International Conference on Affective Computing & Intelligent Interaction (<b>ACII</b>) 2021. <b><font color=blue>Oral</font></b>, acceptance rate 23.6%.","image":"/publications/yin2021contrastive.png","year":2021,"tags":["Others"],"badge":"ACII 2021, Oral","bibtex":"@INPROCEEDINGS{9597453,</br>author={Yin, Yufeng and Lu, Liupei and Xiao, Yao and Xu, Zhi and Cai, Kaijie and Jiang, Haonan and Gratch, Jonathan and Soleymani, Mohammad},</br>booktitle={2021 9th International Conference on Affective Computing and Intelligent Interaction (ACII)}, </br>title={Contrastive Learning for Domain Transfer in Cross-Corpus Emotion Recognition}, </br>year={2021},</br>volume={},</br>number={},</br>pages={1-8},</br>doi={10.1109/ACII52823.2021.9597453}</br>}","url":"https://ieeexplore.ieee.org/document/9597453","code":"https://github.com/intelligent-human-perception-laboratory/Face-Warping-Emotion-Recognition","video":"https://www.youtube.com/watch?v=o7WDXBxYrAc","abstract":"Domain adaptation cannot guarantee to preserve local features necessary for emotion recognition while reducing domain discrepancies in global features. In this paper, we propose Face wArping emoTion rEcognition (FATE) to address this problem. We employ first-order facial animation warping to generate a synthetic dataset and utilize contrastive learning to pre-train the encoder. Then, we fine-tune the encoder and the classifier with the source data. After fine-tuning, the model achieves superior emotion recognition performance by preserving the subtle facial features."}}')},11:function(e,t,n){var a=n(10),o=n(18),r=n(14),i=n(22),s=n(31),c=function(e,t,n){var u,p,l,h,f=e&c.F,g=e&c.G,d=e&c.S,b=e&c.P,m=e&c.B,v=g?a:d?a[t]||(a[t]={}):(a[t]||{}).prototype,y=g?o:o[t]||(o[t]={}),C=y.prototype||(y.prototype={});for(u in g&&(n=t),n)l=((p=!f&&v&&void 0!==v[u])?v:n)[u],h=m&&p?s(l,a):b&&"function"==typeof l?s(Function.call,l):l,v&&i(v,u,l,e&c.U),y[u]!=l&&r(y,u,h),b&&C[u]!=l&&(C[u]=l)};a.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},13:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},14:function(e,t,n){var a=n(21),o=n(29);e.exports=n(16)?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},15:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},16:function(e,t,n){e.exports=!n(13)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},17:function(e,t,n){var a=n(15);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},18:function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},19:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},20:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},21:function(e,t,n){var a=n(17),o=n(41),r=n(42),i=Object.defineProperty;t.f=n(16)?Object.defineProperty:function(e,t,n){if(a(e),t=r(t,!0),a(n),o)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},22:function(e,t,n){var a=n(10),o=n(14),r=n(20),i=n(25)("src"),s=n(51),c=(""+s).split("toString");n(18).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,n,s){var u="function"==typeof n;u&&(r(n,"name")||o(n,"name",t)),e[t]!==n&&(u&&(r(n,i)||o(n,i,e[t]?""+e[t]:c.join(String(t)))),e===a?e[t]=n:s?e[t]?e[t]=n:o(e,t,n):(delete e[t],o(e,t,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||s.call(this)}))},223:function(e,t,n){"use strict";var a=n(11),o=n(38),r=n(26),i=n(13),s=[].sort,c=[1,2,3];a(a.P+a.F*(i((function(){c.sort(void 0)}))||!i((function(){c.sort(null)}))||!n(23)(s)),"Array",{sort:function(e){return void 0===e?s.call(r(this)):s.call(r(this),o(e))}})},23:function(e,t,n){"use strict";var a=n(13);e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},24:function(e,t,n){var a=n(18),o=n(10),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:a.version,mode:n(34)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},240:function(e,t,n){"use strict";n.r(t);n(223);var a=n(108),o={props:["frontmatter"],computed:{data:function(){var e=[],t=!1;for(var n in a)""!==n&&"preprint"!==a[n].year&&e.push(a[n].year);for(var n in a)"preprint"==a[n].year&&(t=!0);for(var o=[(e=e.sort())[e.length-1]],r=e.length-2;r>-1;r--)e[r]!==e[r+1]&&o.push(e[r]);return t&&o.push("preprint"),o}}},r=n(0),i=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("TagPapers",{attrs:{frontmatter:this.$page.frontmatter}}),this._v(" "),t("papers",{attrs:{highlight:this.$page.frontmatter.highlight,years:this.data}})],1)}),[],!1,null,null,null);t.default=i.exports},25:function(e,t){var n=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+a).toString(36))}},26:function(e,t,n){var a=n(19);e.exports=function(e){return Object(a(e))}},29:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},31:function(e,t,n){var a=n(38);e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,o){return e.call(t,n,a,o)}}return function(){return e.apply(t,arguments)}}},34:function(e,t){e.exports=!1},35:function(e,t,n){var a=n(15),o=n(10).document,r=a(o)&&a(o.createElement);e.exports=function(e){return r?o.createElement(e):{}}},38:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},41:function(e,t,n){e.exports=!n(16)&&!n(13)((function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a}))},42:function(e,t,n){var a=n(15);e.exports=function(e,t){if(!a(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!a(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!a(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!a(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},51:function(e,t,n){e.exports=n(24)("native-function-to-string",Function.toString)}}]);
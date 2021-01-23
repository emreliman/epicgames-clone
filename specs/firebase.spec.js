
import { mount,config,RouterLinkStub, createLocalVue } from "@vue/test-utils";
import girişyap from '@/girişyap'




test('girişyap ', () => {
    const wrapper =mount(girişyap)

    let gbutton=wrapper.find("button.giriş-devamet")
    gbutton.trigger("click").then( ()=>{

        expect(wrapper.vm.$data.email).not.toBe('');
    }

    )
    
})

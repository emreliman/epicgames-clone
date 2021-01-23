import { mount,config,shallowMount,RouterLinkStub, createWrapper } from "@vue/test-utils";
import filteritem from '@/filteritem'
import navbar from '@/navbar'



test('filteritem-button ', () => {
    const spyonclick =jest.spyOn(filteritem.methods,'onClick')
    
    const fwrapper=shallowMount(filteritem,{
        stubs:{
            NuxtLink:RouterLinkStub
        }
    })
    
fwrapper.find('button.dropbtn').trigger('click')
expect(spyonclick).toHaveBeenCalled()
spyonclick.mockReset()
})

test('navbar-islogin ', () => {
    const swrapper =mount(navbar,{
        stubs:{
            NuxtLink:RouterLinkStub
        }
    })
    swrapper.setData({
        isLogin:true
    })
    
expect(swrapper.vm.isLogin).toBe(true)
    
})
test('email ', () => {
    const nwrapper =mount(navbar,{
        stubs:{
            NuxtLink:RouterLinkStub
        }
    })
    expect(nwrapper.vm.email).toBe(null)

})






import Vuex from 'vuex'
import { shallow, createLocalVue, shallowMount } from '@vue/test-utils'
import kayıtol from '@/kayıtol'




const localVue = createLocalVue()
localVue.use(Vuex)

describe('Actions',()=>{
 
    describe('store',()=>{
    let store
    let actions 

    beforeEach( ()=>{
        actions={
            aUpdateUser:jest.fn()
        }
        store=new Vuex.Store({actions})
    })

    it('Action çağırma',()=>{
        const wrapper=shallowMount(kayıtol,{
            store,
            localVue
        })
        wrapper.find('button.updater').trigger('click')
        expect(actions.aUpdateUser.mock.calls).toHaveLength(1)
    })


    })




})
import { mount,config,RouterLinkStub } from "@vue/test-utils";
import deneme from '@/deneme'
import smallcard from '@/smallcard'
import kayıtol from '@/kayıtol'
import girişyap from '@/girişyap'
import filteritem from '@/filteritem'
import navbar from '@/navbar'
import reqitem from '@/reqitem'
import siparişcard from '@/siparişcard'





test('Deneme ', () => {
    const wrapper=mount(deneme)
    expect(wrapper.html()).toMatchSnapshot()
})

test('smallcard ', () => {
    const smallcardwrapper=mount(smallcard,{
        propsData:{
            item:{
                "key": 1,
                "name": "AutoChess",
                "corporation":"Dragonest Game",
                "long":"Auto Chess, Dragonest Co.Ltd ve Drodo Studio tarafından ortaklaşa geliştirilen ve Dragonest Co.Ltd yayınlanan orijinal otomatik savaş oyunudur.Auto Chess çıkışından bu yana yepyeni oynanış modu ve stratejik rekabetçi özellikleriyle tüm dünyada önemli bir etki bıraktı. Ayrıca tüm dünyada milyonlarca oyuncunun ilgisini çekti. Her bir oyuncu İnternet üzerinden dünyanın dört bir köşesinden katılan başka oyunculara karşı oynayabilir.",
                "about":
                  "Auto Chess 1.0 çıktı! En iyi çevrimiçi rekabetçi strateji oyununda parçalarını seçerek ve takımını[...]",
                "img":"autochess",
                "listefiyatı":200.00,
              "indirim":50.00,
              "epickupon":50.00,
              "ücret":100.00
              }
        }
    })
    expect(smallcardwrapper.html()).toMatchSnapshot()
    
})

test('kayıtol ', () => {
    const kayıtolwrapper=mount(kayıtol)
    const mail =kayıtolwrapper.vm.email
    kayıtolwrapper.setData({email:"emreliman@gmail.com"})
    expect(kayıtolwrapper.html()).toMatchSnapshot()
})



test('girişyap ', () => {
    const gwrapper=mount(girişyap)
    expect(gwrapper.html()).toMatchSnapshot()
    
})

test('filteritem ', () => {
    const fwrapper=mount(filteritem)
    expect(fwrapper.html()).toMatchSnapshot()
})

test('navbar ', () => {
    const nwrapper=mount(navbar,{
        stubs:{
            NuxtLink:true
        }
    })
    expect(nwrapper.html()).toMatchSnapshot()
})

test('reqitem ', () => {
    const rwrapper=mount(reqitem)
    expect(rwrapper.html()).toMatchSnapshot()
})

// test.only('siparişcard ', () => {
//     const swrapper=mount(siparişcard,{
//         propsData:{
//             item:{
//                 "key": 1,
//                 "name": "AutoChess",
//                 "corporation":"Dragonest Game",
//                 "long":"Auto Chess, Dragonest Co.Ltd ve Drodo Studio tarafından ortaklaşa geliştirilen ve Dragonest Co.Ltd yayınlanan orijinal otomatik savaş oyunudur.Auto Chess çıkışından bu yana yepyeni oynanış modu ve stratejik rekabetçi özellikleriyle tüm dünyada önemli bir etki bıraktı. Ayrıca tüm dünyada milyonlarca oyuncunun ilgisini çekti. Her bir oyuncu İnternet üzerinden dünyanın dört bir köşesinden katılan başka oyunculara karşı oynayabilir.",
//                 "about":
//                   "Auto Chess 1.0 çıktı! En iyi çevrimiçi rekabetçi strateji oyununda parçalarını seçerek ve takımını[...]",
//                 "img":"autochess",
//                 "listefiyatı":200.00,
//               "indirim":50.00,
//               "epickupon":50.00,
//               "ücret":100.00
//               }
//         },
//         stubs:{
//             NuxtLink:RouterLinkStub
//         }

//     })
//     expect(swrapper.html()).toMatchSnapshot()
// })


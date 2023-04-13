//주문영역 상품 이미지 view(작은이미지 클릭 시 큰 이미지로 변경)
const bigImg = document.querySelector('#order .product_img .big img')
const thumA = document.querySelectorAll('#order .product_img .thum a')
// const thumImg = document.querySelectorAll('#order .product_img .thum > a > img')
// console.log(bigImg, thumA)

thumA.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault(); //href 새로고침 기능 막기
        console.log(index)
        bigImg.src = `./images/product_0${index+1}.jpg`
    })
})

//주문영역 상품 옵션 선택
const brands = document.querySelector('#order #brands')
const galaxy = document.querySelector('#order #galaxyS')
const iphone = document.querySelector('#order #iphoneS')
iphone.style.display = 'none'
galaxy.disabled = true //비활성화 초기값  비활성화(1 true) 활성화(0 flase)

brands.addEventListener('change',()=>{
    if (brands.options[2].selected == true){ //만약 브랜드의 옵션[2]를 선택했다면.
        console.log(true)
        brands_dis(iphone,false)
    }else if(brands.options[1].selected){
        brands_dis(galaxy,false)
    }else {
        brands_dis(galaxy,true)
        galaxy.options[0].selected = true //select의 값은 참이다...
    }
})

function brands_dis(target,boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

console.log('sss')
// 기종 선택시 주문영역에 기종명 출력하기
const order_model = document.querySelector ('.order_product .model')
const galaxy_op = document.querySelectorAll ('#galaxyS option')
const iphone_op = document.querySelectorAll ('#iphoneS option')
console.log(order_model, galaxy_op, iphone_op)

//갤럭시 기종 출력
galaxy.addEventListener('change', ()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])
})

//아이폰 기종 출력

//수량에 따른 가격 증가
const orderNum = document.querySelector ('#order #order_num')
const orderPrice = document.querySelector ('#order .order_list em span')
let casePrice = 8900
let total
console.log('orderNum,orderPrice')

orderNum.addEventListener('change',()=>{
    total = orderNum.value*casePrice
    if(orderNum.value>0){
        orderPrice.innerHTML = `${total.toLocaleString('ko-kr')}`
    }else{
        window.alert('최소 구매가능개수는 1개입니다.')
        orderNum.value = 1
    }
})

//x를 누르면 초기화
const orderReset = document.querySelector ('#order #cancel')
orderReset.addEventListener('click',()=>{
    orderNum.value = 1
    orderPrice.innerHTML="8,900"
})

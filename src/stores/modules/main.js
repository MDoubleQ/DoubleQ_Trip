const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1 )
export default {
  namespaced:true,
  state(){
    return {
      startDate: startDate,
      endDate: endDate,
      isShowAnimate: false,
      // isShowAnimate: true,
    }
  }
}
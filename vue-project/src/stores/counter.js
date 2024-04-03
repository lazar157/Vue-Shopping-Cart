import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useCounterStore = defineStore('counter', {
  state:() => ({
    products:[
      {
        id: 1,
        name: 'Iphone 14',
        price: 800,
        image: 'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_640.jpg',
      },
      {
        id: 2,
        name: 'Samsung s20',
        price: 1200,
        image: 'https://cdn.pixabay.com/photo/2021/05/17/20/08/samsung-6261767_640.jpg',
      },
      {
        id: 3,
        name: 'Tv LG',
        price: 300,
        image: 'https://cdn.pixabay.com/photo/2017/03/18/18/10/screen-2154629_1280.png',
      },
      {
        id: 4,
        name: 'Oppo 14',
        price: 500,
        image: 'https://cdn.pixabay.com/photo/2022/12/28/06/04/oppo-7682243_640.jpg',
      },
      {
        id: 5,
        name: 'PlayStation 5',
        price: 700,
        image: 'https://cdn.pixabay.com/photo/2020/10/15/07/45/playstation-5656248_640.jpg',
      },
      {
        id: 6,
        name: 'Xbox',
        price: 500,
        image: 'https://cdn.pixabay.com/photo/2017/04/04/18/07/video-game-console-2202570_640.jpg',
      },
      {
        id: 7,
        name: 'Gaming PC',
        price: 1500,
        image: 'https://media.istockphoto.com/id/1449425608/photo/computer-gaming-pc-on-desk-in-dark-room-with-neon-futuristic-modern-workplace.jpg?s=612x612&w=0&k=20&c=GHcMmG0bp_8wLbMlo4fESQTd2jyuGliDcXL8krUOjNQ=',
      },
      {
        id: 8,
        name: 'MacBook',
        price: 1000,
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg',
      },
      {
        id: 9,
        name: 'Camera',
        price: 900,
        image: 'https://cdn.pixabay.com/photo/2012/04/13/17/00/camera-32871_640.png',
      },
      {
        id: 10,
        name: 'Nintendo Switch',
        price: 950,
        image: 'https://cdn.pixabay.com/photo/2022/10/10/10/28/nintendo-7511485_640.jpg',
      },

    ],
    cartItems:[

    ]
  }),
  getters:{
    countCartItems(state){
      return state.cartItems.length
    }
  },
  actions:{
    addToCart(item){
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItems[index].quantity += 1;
        toast.success("Your item has been updated",{
          timeout:2000
        })
      } else{
        item.quantity = 1;
        this.cartItems.push(item);
        toast.success("Your item has been saved",{
          timeout:2000
        })
      }
    },
    incrementQ(item){
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItems[index].quantity += 1;
        toast.success("Your item has been updated",{
          timeout:2000
        })
      }
    },
    decrementQ(item){
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItems[index].quantity -= 1;
        if(this.cartItems[index].quantity === 0){
          this.cartItems = this.cartItems.filter(product => product.id !== item.id)
        }
        toast.success("Your item has been updated",{
          timeout:2000
        })
      }
    },
    removeFromCart(item){
      this.cartItems = this.cartItems.filter(product => product.id !== item.id)
      toast.success("Your item has been removed",{
        timeout:2000
      })
    }

  }
})

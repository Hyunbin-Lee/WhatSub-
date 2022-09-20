import Vue from 'vue'
import VueRouter from 'vue-router'

//home
import HomeView from "@/views/home/HomeView.vue";
import RecommendNutritionResultView from "@/views/home/RecommendNutritionResultView.vue";
import RecommendNutritionView from "@/views/home/RecommendNutritionView.vue";
import RecommendTodayView from "@/views/home/RecommendTodayView.vue";

//navbar
import OrderBasketView from "@/views/navbar/OrderBasketView.vue";
import OrderDetailView from "@/views/navbar/OrderDetailView.vue";
import RegistCombinationView from "@/views/navbar/RegistCombinationView.vue";
import RegistReviewView from "@/views/navbar/RegistReviewView.vue";
import ZzimView from '@/views/navbar/ZzimView.vue';

//login
import LoginView from "@/views/login/LoginView.vue";
import SingupView from "@/views/login/SingupView.vue";
import SurveyBasicView from "@/views/login/SurveyBasicView.vue";
import SurveySubtiView from "@/views/login/SurveySubtiView.vue";

//rank
import RankView from "@/views/rank/RankView.vue";

//combination
import CombinationView from "@/views/combination/CombinationView.vue";
import CombinationDetailView from "@/views/combination/CombinationDetailView.vue";

//order
import OrderOneView from "@/views/order/OrderOneView.vue";
import OrderTwoView from "@/views/order/OrderTwoView.vue";
import OrderThreeView from "@/views/order/OrderThreeView.vue";
import OrderFourView from "@/views/order/OrderFourView.vue";
import OrderCheckView from "@/views/order/OrderCheckView.vue";
import StoreInfoView from "@/views/order/StoreInfoView.vue";

//profile
import MyPageView from "@/views/profile/MyPageView.vue";

Vue.use(VueRouter)

const routes = [
  //home
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recommendnutritionresult",
    name: "recommendnutritionresult",
    component: RecommendNutritionResultView,
  },
  {
    path: "/recommendnutrition",
    name: "recommendnutrition",
    component: RecommendNutritionView
  },
  {
    path: "/recommendnutrition",
    name: "recommendnutrition",
    component: RecommendNutritionView,
  },
  {
    path: "/recommendtoday",
    name: "recommendtoday",
    component: RecommendTodayView,
  },

  //navbar
  {
    path: "/orderbasket",
    name: "orderbasket",
    component: OrderBasketView,
  },
  {
    path: "/orderdetail",
    name: "orderdetail",
    component: OrderDetailView,
  },
  {
    path: "/registcombination",
    name: "registcombination",
    component: RegistCombinationView,
  },
  {
    path: "/registreview",
    name: "registreview",
    component: RegistReviewView,
  },
  {
    path: "/zzim",
    name: "zzim",
    component: ZzimView,
  },

  //login
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/singup",
    name: "singup",
    component: SingupView,
  },
  {
    path: "/surveybasic",
    name: "surveybasic",
    component: SurveyBasicView,
  },
  {
    path: "/surveysubti",
    name: "surveysubti",
    component: SurveySubtiView,
  },

  //rank
  {
    path: "/rank",
    name: "rank",
    component: RankView,
  },

  //combination
  {
    path: "/combination",
    name: "combination",
    component: CombinationView,
  },
  {
    path: "/combinationdetail",
    name: "combinationdetail",
    component: CombinationDetailView,
  },

  //order
  {
    path: "/ordercheck",
    name: "ordercheck",
    component: OrderCheckView,
  },
  {
    path: "/orderone",
    name: "orderone",
    component: OrderOneView,
  },
  {
    path: "/ordertwo",
    name: "ordertwo",
    component: OrderTwoView,
  },
  {
    path: "/orderthree",
    name: "orderthree",
    component: OrderThreeView,
  },
  {
    path: "/orderfour",
    name: "orderfour",
    component: OrderFourView,
  },
  {
    path: "/storeinfo",
    name: "storeinfo",
    component: StoreInfoView,
  },
  
  
  //profile
  {
    path: "/mypage",
    name: "mypage",
    component: MyPageView,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
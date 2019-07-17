# class101 프론트엔드 개발자 과제

수업 목록 페이지와 장바구니 페이지 만들기

## How to use it

1. npm run dev
2. localhost:3000

## Directory structure
    .
    ├── pages                              # url로 접속 가능한 프로젝트의 페이지
        ├── products                         # 수업 목록 페이지로 수업을 장바구니에 담을 수 있다
        └── wishlist                         # 장바구니 페이지로 담은 수업에 쿠폰을 적용하고 총 결제액을 표시한다
    ├── src                                # source files
        ├── assets                           # data from server
            ├── coupons.js                     # coupon에 관련된 data로 종류는 amount와 rate 2가지다
            ├── productItems.js                # 수업에 관련된 data이다
            └── index.js                       # 각 data file을 참조하기 쉽도록 index로 묶었다 
        ├── components                       # React Components
            ├── products                       # 수업 목록 페이지의 components
                ├── Pagination.tsx               # pagination 담당
                ├── ProductItem.tsx              # 수업 component
                ├── ProductItemList.tsx          # 수업 component 들의 목록
                ├── SelectedProductItem.tsx      # 장바구니에 담은 수업 component
                └── SelectedProductItemList.tsx  # 장바구니에 담은 수업 component 들의 목록
            ├── wishlist                       # 장바구니 페이지의 components
                ├── ChooseCoupon.tsx             # coupon 선택할 수 있음(select box)
                ├── Header.tsx                   # 장바구니에 담긴 각 상품의 column name 을 표시(전체 선택 기능)
                ├── index.tsx                    # 각 component 참조하기 쉽도록 index 파일로 묶음
                ├── TotalPrice.tsx               # 전체 가격을 표시
                ├── WishedProductItem.tsx        # 장바구니에 담긴 수업 component
                └── wishedProductItemList.tsx    # 장바구니에 담긴 수업 component 목록
    ├── states                             # redux 관련 파일
        ├── actions.tsx                      # action 모음
        ├── actionTypes.tsx                  # action type 모음
        ├── reducer.tsx                      # reducer state를 관리
        └── state.tsx                        # productItem data를 활용하여 state를 선언
    ├── utils                              # helper 함수
        └── index.tsx                        # productItem의 상태를 바꾸기 위한 함수, 할인가격과 최종가격 산출하는 함수 
    ├── .babelrc
    ├── .gitignore
    ├── next-env.d.ts
    ├── package.json
    ├── README.md
    ├── store.tsx                          # redux의 store 생성
    ├── tsconfig.json
    └── yarn.lock

    
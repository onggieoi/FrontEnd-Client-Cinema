import { CardData, Possition } from 'interfaces';

export const dataShowing: CardData[] = [
  {
    id: '1', title: 'SPUTNIK', image: 'https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_sputnik_-_vietnamese_poster_final_1.jpg', subTitle: 'Quái Vật Săn Đêm',
    images: [
      'https://m.media-amazon.com/images/M/MV5BOTI4ZmE4MDUtMTFjOS00NWNkLThkMzgtOTdmYzY4ODhmYTI0XkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_.jpg',
      'https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2020/05/sputnik-movie.png',
      'https://pbs.twimg.com/media/EXo6wegUYAAcTx4.jpg',
      'https://www.indiewire.com/wp-content/uploads/2020/07/SPUTNIKSTILL1.jpg',
      'https://static01.nyt.com/images/2020/08/13/arts/13sputnik/13sputnik-facebookJumbo.jpg'
    ]
  },
  {
    id: '2', title: 'PAWN', image: 'https://galaxycine.vn/media/2020/10/1/pawn450x300_1601539830433.jpg', subTitle: 'cục nợ hoá cục cưng'
  },
  {
    id: '3', title: 'Ròm', image: 'https://galaxycine.vn/media/2020/9/10/1024wx768h_1599711358536.jpg'
  },
  {
    id: '4', title: 'HONEST THIEF', image: 'https://galaxycine.vn/media/2020/9/24/1024wx768h_1600944574917.jpg', subTitle: 'Tên Cướp hoàn lương'
  },
  {
    id: '5', title: 'THE CLEARING', image: 'https://galaxycine.vn/media/2020/10/5/clearing-banner-1350x900_1601866217873.jpg', subTitle: 'Trại Xác Sống'
  },
];

export const dataComming: CardData[] = [
  { id: '6', title: 'Tiệc Trăng Máu', image: 'https://galaxycine.vn/media/2020/10/2/450x300px1_1601622592789.jpg' },
  {
    id: '7', title: 'AMERICAN FIGHTER', image: 'https://galaxycine.vn/media/2020/10/12/1350x900_1602486303428.jpg', subTitle: 'Tay Đấm Mỹ'
  },
  {
    id: '8', title: 'THE DOORMAN', image: 'https://galaxycine.vn/media/2020/10/12/450wx300h_1602471909305.jpg', subTitle: 'Chiến Binh Hồi Sinh'
  },
  {
    id: '9', title: 'THE ELFKINS – BAKING A DIFFERENCE', image: 'https://galaxycine.vn/media/2020/10/13/450-ti-hon_1602579211269.jpg', subTitle: 'Tí Hon Hậu Đậu'
  },
]

export const data: CardData[] = [
  {
    id: '1', title: 'SPUTNIK', image: 'https://galaxycine.vn/media/2020/10/12/450x300-quai-vat_1602488194219.jpg', subTitle: 'Quái Vật Săn Đêm',
    images: [
      'https://m.media-amazon.com/images/M/MV5BOTI4ZmE4MDUtMTFjOS00NWNkLThkMzgtOTdmYzY4ODhmYTI0XkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_.jpg',
      'https://pbs.twimg.com/media/EXo6wegUYAAcTx4.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71zlyc6LR3L._RI_.jpg',
      'https://i.redd.it/kuf5smqw99c51.jpg'
    ]
  },
  {
    id: '2', title: 'PAWN', image: 'https://galaxycine.vn/media/2020/10/1/pawn450x300_1601539830433.jpg', subTitle: 'cục nợ hoá cục cưng'
  },
  {
    id: '3', title: 'Ròm', image: 'https://galaxycine.vn/media/2020/9/10/1024wx768h_1599711358536.jpg'
  },
  {
    id: '4', title: 'HONEST THIEF', image: 'https://galaxycine.vn/media/2020/9/24/1024wx768h_1600944574917.jpg', subTitle: 'Tên Cướp hoàn lương'
  },
  {
    id: '5', title: 'THE CLEARING', image: 'https://galaxycine.vn/media/2020/10/5/clearing-banner-1350x900_1601866217873.jpg', subTitle: 'Trại Xác Sống'
  },
  { id: '6', title: 'Tiệc Trăng Máu', image: 'https://galaxycine.vn/media/2020/10/2/450x300px1_1601622592789.jpg' },
  {
    id: '7', title: 'AMERICAN FIGHTER', image: 'https://galaxycine.vn/media/2020/10/12/1350x900_1602486303428.jpg', subTitle: 'Tay Đấm Mỹ'
  },
  {
    id: '8', title: 'THE DOORMAN', image: 'https://galaxycine.vn/media/2020/10/12/450wx300h_1602471909305.jpg', subTitle: 'Chiến Binh Hồi Sinh'
  },
  {
    id: '9', title: 'THE ELFKINS – BAKING A DIFFERENCE', image: 'https://galaxycine.vn/media/2020/10/13/450-ti-hon_1602579211269.jpg', subTitle: 'Tí Hon Hậu Đậu'
  },
];

export const Cinema = [
  'UNKNOWN Hà Nội',
  'UNKNOWN Sài Gòn',
  'UNKNOWN BMT'
];

export const Session = [
  { id: '1', sesison: '15 PM' },
  { id: '2', sesison: '17 PM' },
  { id: '3', sesison: '19 PM' },
  { id: '4', sesison: '21 PM' },
  { id: '5', sesison: '23 PM' },
  { id: '6', sesison: '0 AM' },
  { id: '7', sesison: '1 AM' },
];

export const PossitionEx: Possition[] = [
  { id: '1', name: 'A1', status: false },
  { id: '2', name: 'A2', status: false },
  { id: '3', name: 'A3', status: false },
  { id: '4', name: 'A4', status: true },
  { id: '5', name: 'A5', status: false },
  { id: '6', name: 'B1', status: false },
  { id: '7', name: 'B2', status: true },
  { id: '8', name: 'B3', status: false },
  { id: '9', name: 'B4', status: false },
  { id: '10', name: 'B5', status: true },
  { id: '11', name: 'C1', status: false },
  { id: '12', name: 'C2', status: false },
]

import marbleWhite from '/public/images/Sample collection/White-Gold surface/sample1.jpg'
import marbleWhite1 from '/public/images/Sample collection/White-Gold surface/sample2.jpg'
import marbleWhite2 from '/public/images/Sample collection/White-Gold surface/sample3.jpg'
import marbleWhite3 from '/public/images/Sample collection/White-Gold surface/sample4.jpg'
import marbleWhite4 from '/public/images/Sample collection/White-Gold surface/sample5.jpg'
import marbleBlack from '/public/images/Sample collection/Marbel/black.jpg'
import marbleAllColors from '/public/images/Sample collection/Marbel/all-colors.jpg'
import marblePlainWhite from '/public/images/Sample collection/Marbel/white.jpg'
import marbleLightGrey from '/public/images/Sample collection/Marbel/lightgray.jpg'
import wpcBrown from '/public/images/Sample collection/Rough Surfaces/sample2.jpg'
import wpcBrown1 from '/public/images/Sample collection/Rough Surfaces/sample4.jpg'
import wpcBrown2 from '/public/images/Sample collection/Rough Surfaces/sample5.jpg'
import wpcBrown3 from '/public/images/Sample collection/Rough Surfaces/sample8.jpg'
import wpcDark  from '/public/images/Sample collection/Rough Surfaces/sample7.jpg'
import wpcDark1  from '/public/images/Sample collection/Rough Surfaces/sample6.jpg'
import wpcDark2  from '/public/images/Sample collection/Rough Surfaces/sample9.jpg'
import wpcDark3  from '/public/images/Sample collection/Rough Surfaces/sample3.jpg'

import vinyl1 from '/public/images/Sample collection/Vinyl/sample1.jpg'
import vinyl4 from '/public/images/Sample collection/Vinyl/sample4.jpg'
import vinyl5 from '/public/images/Sample collection/Vinyl/sample5.jpg'
// import vinyl6 from '/public/images/Sample collection/Vinyl/sample6.jpg'
import vinyl7 from '/public/images/Sample collection/Vinyl/sample7.jpg'
import vinyl8 from '/public/images/Sample collection/Vinyl/sample8.jpg'
// import vinyl9 from '/public/images/Sample collection/Vinyl/sample9.jpg'
import vinyl10 from '/public/images/Sample collection/Vinyl/sample10.jpg'
// import vinyl11 from '/public/images/Sample collection/Vinyl/sample11.jpg'

import kitchen1 from '/public/images/Sample collection/Contact Paper/collection.jpg'
import contactPaper_1 from '/public/images/Sample collection/Contact Paper/contactPaper_1.jpg'
import contactPaper_2 from '/public/images/Sample collection/Contact Paper/contactPaper_2.jpg'
import contactPaper_3 from '/public/images/Sample collection/Contact Paper/contactPaper_3.jpg'
import contactPaper_4 from '/public/images/Sample collection/Contact Paper/contactPaper_4.jpg'
import brick_patterns from '/public/images/Sample collection/Brick/brick_patterns.jpg'
import brick_sample1 from '/public/images/Sample collection/Brick/brick_sample1.jpg'
import brick_sample2 from '/public/images/Sample collection/Brick/brick_sample2.jpg'


const Products  = [
    {
        id:1,
        title:'Marble White-Gold',
        slug:'marble-white-gold',
        price:1600,
        prevPrice:1700,
        width:5,
        height:0.5,
        mainImg:marbleWhite,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false,
        installFee:500,
        type:'contact paper',
    },
    {
        id:2,
        title:'Marble Black',
        slug:'marble-black',
        price:1600,
        prevPrice:1850,
        width:6,
        height:0.5,
        mainImg:marbleBlack,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false,
        installFee:500,
        type:'contact paper',
    },
    {
        id:3,
        title:'Marble Light Grey',
        slug:'marble-light-grey',
        price:1600,
        prevPrice:1850,
        width:4,
        height:1,
        mainImg:marbleLightGrey,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false,
        installFee:500,
        type:'contact paper',
    },
    {
        id:4,
        title:'Marbe Plain White',
        slug:'marble-plain-white',
        price:1600,
        prevPrice:1700,
        width:4,
        height:1,
        mainImg:marblePlainWhite,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false,
        installFee:500,
        type:'contact paper',
    },
    {
        id:5,
        title:'WPC Brown Wall Panel',
        slug:'wpc-brown-wall-panel',
        price:1600,
        prevPrice:1990,
        width:4,
        height:1,
        mainImg:wpcBrown,
        Img1:wpcBrown1,
        Img2:wpcBrown2,
        Img3:wpcBrown3,
        // Img4:marbleWhite4,
        installationFee:false,
        installFee:500,
        type:'vinyl',
    },
    {
        id:6,
        title:'WPC Dark Wall Panel',
        slug:'wpc-dark-wall-panel',
        price:1600,
        prevPrice:1990,
        width:4,
        height:1,
        mainImg:wpcDark,
        Img1:wpcDark1,
        Img2:wpcDark2,
        Img3:wpcDark3,
        // Img4:marbleWhite4,
        installationFee:false,
        installFee:500,
        type:'vinyl',
    },
    {
        id:7,
        title:'PVC 45cm Waterproof Wooden stripes Self Adhesive Wallpaper wall stickers for Room Wall & Furniture decoration',
        slug:'PVC-45cm-Waterproof-Wooden-stripes-Self-Adhesive-Wallpaper-wall-stickers-for-Room-Wall-&-Furniture-decoration',
        price:1600,
        prevPrice:1890,
        width:4,
        height:1,
        mainImg:vinyl10,
        Img1:vinyl4,
        Img2:vinyl5,
        Img3:vinyl7,
        Img4:vinyl8,
        installationFee:false,
        installFee:500,
        type:'vinyl',
    },
    {
        id:8,
        title:'Removable kitchen counter marble contact paper PVC self-adhesive waterproof marble wall paper sticker',
        slug:'Removable-kitchen-counter-marble-contact-paper-PVC-self-adhesive-waterproof-marble-wall-paper-sticker',
        price:1700,
        prevPrice:2000,
        width:4,
        height:1,
        mainImg:kitchen1,
        Img1:marbleLightGrey,
        Img2:marblePlainWhite,
        Img3:marbleBlack,
        Img4:marbleAllColors,
        installationFee:false,
        installFee:500,
        type:'contact paper',
    },
    {
        id:9,
        title: 'Contact paper PVC self-adhesive waterproof marble wall paper sticker',
        slug:'contact-paper-PVC-self-adhesive-waterproof-marble-wall-paper-sticker',
        price:1700,
        prevPrice:2000,
        width:4,
        height:1,
        mainImg:contactPaper_4,
        Img1:kitchen1,
        Img2:contactPaper_3,
        Img3:contactPaper_1,
        Img4:contactPaper_4,
        installationFee:false,
        installFee:500,
        type:'contact paper',
    },
    {
        id:10,
        title: '70*77cm Peel And Stick Wall Sticker Self Adhesive Brick Pattern Wallpaper',
        slug:'70*77cm-Peel-and-Stick-Wall-Sticker-Self-Adhesive-Brick-Pattern-Wallpaper',
        price:500,
        prevPrice:650,
        width:0.7,
        height:0.77,
        mainImg:brick_patterns,
        Img1:brick_patterns,
        Img2:brick_sample1,
        Img3:brick_sample2,
        // Img4:contactPaper_4,
        installationFee:false,
        installFee:150,
        type:'brick',
    }
]




export default Products;
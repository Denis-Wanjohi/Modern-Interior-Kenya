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


const Products  = [
    {
        id:1,
        title:'Marble White-Gold',
        slug:'marble-white-gold',
        price:400,
        prevPrice:600,
        width:5,
        height:0.5,
        mainImg:marbleWhite,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false
    },
    {
        id:2,
        title:'Marble Black',
        slug:'marble-black',
        price:450,
        prevPrice:550,
        width:6,
        height:0.5,
        mainImg:marbleBlack,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false
    },
    {
        id:3,
        title:'Marble Light Grey',
        slug:'marble-light-grey',
        price:550,
        prevPrice:700,
        width:4,
        height:1,
        mainImg:marbleLightGrey,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false
    },
    {
        id:4,
        title:'Marbe Plain White',
        slug:'marble-plain-white',
        price:550,
        prevPrice:700,
        width:4,
        height:1,
        mainImg:marblePlainWhite,
        Img1:marbleWhite1,
        Img2:marbleWhite2,
        Img3:marbleWhite3,
        Img4:marbleWhite4,
        installationFee:false
    },
    {
        id:5,
        title:'WPC Brown Wall Panel',
        slug:'wpc-brown-wall-panel',
        price:900,
        prevPrice:1250,
        width:4,
        height:1,
        mainImg:wpcBrown,
        Img1:wpcBrown1,
        Img2:wpcBrown2,
        Img3:wpcBrown3,
        // Img4:marbleWhite4,
        installationFee:false
    },
    {
        id:6,
        title:'WPC Dark Wall Panel',
        slug:'wpc-dark-wall-panel',
        price:1150,
        prevPrice:1300,
        width:4,
        height:1,
        mainImg:wpcDark,
        Img1:wpcDark1,
        Img2:wpcDark2,
        Img3:wpcDark3,
        // Img4:marbleWhite4,
        installationFee:false
    }

]


export default Products;
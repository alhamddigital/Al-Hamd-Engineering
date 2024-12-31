import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const AllImages = () => {

    const [image, setImage] = useState("")

    useEffect(() => {
        if (image != "") {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [image])

    const handleOverlay = (event) => {
        if (event.target.classList.contains("overlay")) {
            setImage("")
        }
    }

    const array = [
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542633/almaan_2_q7tgne.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543506/ittefaq_sugar_mills_8_hgelpn.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543508/ittefaq_sugar_mills_9_fdnub1.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543536/almoiz_sugar_mills_38_tfqwmg.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543533/almoiz_sugar_mills_32_e7c3bj.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543530/almoiz_sugar_mills_28_e1nekb.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542051/alliance_7_qkhsvi.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542052/alliance_9_jqw8t6.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542046/alliance_17_wmubjp.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542045/alliance_16_btxm3k.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542045/alliance_15_bfcbh3.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542039/allaince_1_ycjmsa.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543559/bandi_7_qpnv0m.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543557/bandi_6_kyw29x.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543557/bandi_4_zzpcbq.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543555/bandi_5_vucirh.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543553/bandi_1_g0h9nd.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543554/bandi_2_ro2tav.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542036/SGM_Sugar_mills_3_nexyzu.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542036/SGM_Sugar_mills_5_olaodo.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542035/SGM_Sugar_mills_4_mtxjsh.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542035/SGM_Sugar_mills_2_sukqp9.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542053/ryk_2_mpzd3d.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542054/ryk_wvqvwz.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542053/ryk_3_smcwfl.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542107/molasses_pond_chashma_sugar_mills_3_yriopi.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542627/sillawali_sugar_mills_5_rpxwsa.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735542627/sillawali_sugar_mills_5_rpxwsa.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543622/RYK_POWER_PLANT_1_yehyya.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543623/RYK_POWER_PLANT_1_is15vd.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543623/RYK_POWER_PLANT_10_hpr7rv.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543627/RYK_POWER_PLANT_16_ufvjcy.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543632/RYK_POWER_PLANT_6_z2yxdb.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543630/RYK_POWER_PLANT_4_bemmcd.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543638/Swithch_Yard_2_jgcbds.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543639/Swithch_Yard_3_dejmi0.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543648/water_treatment_8_hhdaib.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543645/water_treatment_22_sre9uk.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543642/water_treatment_13_rd6eev.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543641/water_treatment_11_lzdcwk.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543641/water_treatment_10_drnro1.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543663/ethnol_plant_9_fx4lux.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543661/ethnol_plant_7_a6plfz.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543651/ethanol1_vz3fxp.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543662/STEELMILL2_jssic5.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543663/STEELMILL_qkrxjv.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543663/STEELMILL4_lcnrgs.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543664/STEELMILL3_wfmdzf.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543665/PIONEER_CEMENT_1_my8lmu.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543680/WHOLE_FOOD_MILL_LAYYAH_16_qzgbra.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543574/mirpur_khas_paper_plant_30_entf2f.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543575/mirpur_khas_paper_plant_32_oo3h9g.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543575/mirpur_khas_paper_plant_31_fclkyb.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543573/mirpur_khas_paper_plant_29_l6s0j2.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543572/mirpur_khas_paper_plant_26_y8xsex.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543565/mirpur_khas_paper_plant_16_i2djx1.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543613/sport_1_oveids.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1735543619/sport_4.1_pcxqei.jpg"
    ]
    return (
        <div className='w-full h-max px-3 sm:px-5 mt-5 sm:mt-9'>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    array.map((e, i) => {
                        return (
                            <div onClick={() => setImage(e)} key={i} className='w-full h-[300px] sm:h-[400px] cursor-pointer'>
                                <img className='w-full h-full object-cover' src={e} alt="" />
                            </div>
                        )
                    })
                }
            </div>

            {
                image && (
                    <div onClick={handleOverlay} className='overlay w-full flex justify-center items-center h-screen fixed top-0 left-0 z-30 cursor-crosshair bg-[rgb(0,0,0,0.5)]'>
                        <div className='w-[90%] md:w-[80%] lg:w-[70%] h-[45vh] sm:h-[70vh] lg:h-[85vh] relative cursor-auto'>
                            <div onClick={() => setImage("")} className='w-[40px] h-[40px] hover:bg-black hover:text-white duration-300 text-xl absolute -right-4 -top-5 bg-white rounded-full flex justify-center items-center cursor-pointer'><RxCross1 /></div>
                            <img className='w-full h-full' src={image} alt="" />
                        </div>
                    </div>
                )
            }


        </div>
    )
    
}

export default AllImages
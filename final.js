/**
 * Created by colinjsherman on 7/19/16.
 */


document.getElementById("slideshow").style.display = "none";
document.getElementById("buttons").style.display = "none";

var albums = {
    "Disney":[
        "https://otfapa-ch3302.files.1drv.com/y3mFecVLz0B_tqwuSZNv-fYXWLMoA5KldtAEzzqk8zZs0sf_JWp_jveRSa7W_tcQaQCKKa6PYl-r51DpADnU_uGxt7apEHgYph8qzIMXfDnbPxy6DjhLf1IeT-V_lkvQh-4lI3VVoFcLxS38-3_foXrHo2UrjWFi6hRXe1JuPbqLVk?width=1024\u0026height=679\u0026cropmode=none",
        "https://ozfapa-ch3302.files.1drv.com/y3mJy7R5wk6NgqFUYYH6stzAigx0FBmuMb64gk8CPAvroXcwpj0PzLz3iIZF5H4mpFVXXXkoG-B6WQeJ2rWo79xmPcmlEaTK5SCFmkICJyF6GcY1kR_YFB8b0xeiVcnEHOLQMVwvE01gP9ALMeG56FLDnsjDPh4z1gCDkF7FuBwez4?width=1024\u0026height=679\u0026cropmode=none",
        "https://pzfapa-ch3302.files.1drv.com/y3mnFXirYQSPXit-5lfl08ua-3s1s0fiCmGhb0uuIxlJoGZo1cv-q9KBf10buk85EzgrnnDCy26O_8R06unSS-8_-qwe2c0A7RKpVBnCOOLj-asgr_WqPHcGwyO-AFmSrz8-vvv3-dSvo1_N5v19qX5V0F50uoIwj43luZ8SOneQfU?width=1024\u0026height=679\u0026cropmode=none",
        "https://ojfapa-ch3302.files.1drv.com/y3mQzbz9mP3HcPyXXbUqv0gXDxjBOIvsXcEujL0woi9MOPd8pGGLerQOqzaW4cldWwx3WNCgtfnpbfQDGTaJsxVBKNzGS6c-Duy7tDwyXYRvej7Prn9KUtTwDDVKeLYDDWrHzyrztC3Y2e0jnnwxiyxXH5bsxec8V_WIDoEwGZXEDA?width=1024\u0026height=679\u0026cropmode=none",
        "https://pjfapa-ch3302.files.1drv.com/y3mPCgJSB6_xhoDeJO25UUGUyaFHR32LAdrWt0BAnMUf6Q6AYWd7ffctXEwGqt2_yDaHCDNcOYaWBLODH7nBv1AxqT4a4_OD5n9359ZnGZlD436JeZJd4AjfhWN2T0Ko9r_1v3DulrFpVwZmXGirp1n3vaY4W3TRWyPKHll5c527zQ?width=1024\u0026height=679\u0026cropmode=none",
        "https://odfapa-ch3302.files.1drv.com/y3ml5VyGJkmeVoI9zHQH3C7_hMonkK3dcp2bawkee7t_yFVMxu9W49EfiU78MiB_u5c3KhHCQCRvY1AUevwuQsATRrd90sJjEJusVh1-ZkxtB58ERteigwFLUFLw2WdHVZEWSZn6qWR9V_V5TMvf38Eb6CvBoooeoeBwhHcVJir02U?width=1024\u0026height=679\u0026cropmode=none",
        "https://ndfapa-ch3302.files.1drv.com/y3m9I1tk_kyGODlxauKgLqZtn-cXKNPI4wLMdMmxljXV2QBNKLAyO5Y9sVw33Ajq-gkKzWAhQvzFbM-eYk72N_JIoJgTtVZbA5oasDzjw6DqGpUp9qlDxHMrVYaiza0bOeBeI-9MtVIfpvQCP8z7Po2OQ?width=679\u0026height=1024\u0026cropmode=none"
    ],
    "My Friends":[
        "https://paaqfg-ch3302.files.1drv.com/y3myzw-1tcvaBBwgAda8-ra0Ul9ZEF4HKcWpVbdjiHugWt1R-2elpTRpgCKRWJqsNTM81Z1czfUwCiT6_ZJd6CX4-RSFkaJgEBj80IIQ682RSHJLnTJd_Wi75D8TuykePSjt6bYWKxpQWeFCeUBmp20Xs5dWkinuF7dAkmyVNCp-1Y?width=1024\u0026height=679\u0026cropmode=none",
        "https://odhbga-ch3302.files.1drv.com/y3mdfeK52Ri5gj_rfPiGk3Nfjj9dRV5Zjn6EL-vXu_bJqnNPutVM3UgFBooR-8cHbiIOXIc5b1xgiyVralCJkjaWA5zyfXL27P-vDT6cJFROxuAfZge9-yBJE6VlV4UFgirlOimuNh3Pqpilccqm8qOUm19dZkXcVR_z2l8NteEGJk?width=1024\u0026height=679\u0026cropmode=none",
        "https://1rq3ra-ch3302.files.1drv.com/y3mfwS5trcFghfVByXUOtvY4SQ079ofsTkh1tOv4m3xBBLQJkpxW7c-EgoiJHcPSGkWyREEUU-uLyiBdbGaE_EhO0LyiXVZfW6bXEiFjRQs97ji8XUmFm-q0jFOO33ALewWv73NZKeJcIWF49Ze6vzJaBtz0OdFU4S0kW0IaIs6ymo?width=1024\u0026height=679\u0026cropmode=none",
        "https://1bq3ra-ch3302.files.1drv.com/y3m0l8lCkxueW5CyXviOxdKtCZQC8-pgfblVMO9t2h1ssEvJDuXzZueMhUJHAtxfGzgXtKDVf9NnMkcp-Mne_NAurU56Z45lsiJpkvKJV2ZEBL4pHM5svLZPZczpOsaaEluQmelLoDLvZy5eFtJsocAurUPr-eNS6FvS5Zx9xPYayg?width=1024\u0026height=679\u0026cropmode=none",
        "https://1xqiog-ch3302.files.1drv.com/y3mQ_ML3z_LpUneU5LZOBTN1o5dyVswXkctdFd1U0MkyoZ8ovScxy4qvUAqZ6gZYN6XUR63EbA2c87dOI7q7K9bkRjgPcyzUkvrE7YeDzGFu2rmoN4X-YuOGTopYd8AIlHIkLn9UQPqDft2ugznXFDjkk9KbQEhaJVPw7nMkoOLGlA?width=1024\u0026height=679\u0026cropmode=none",
        "https://1hqiog-ch3302.files.1drv.com/y3mauCqVERW81k3hNZ6othfbYC8oPajx4HJvqeSveEkoDtOO7fH17cQdekJhYpiOOUhXdBHNCZ07OptHZ6YfFdvWEZaY1XOpjVSGrR0EHdSD67vI1fcoZ0N4O_0YZqBvtyqCaZ1OlHll9moJqSKAbMcQ9rF1U4QPFfnGNuEz9q4ya8?width=1024\u0026height=679\u0026cropmode=none",
        "https://3rqiog-ch3302.files.1drv.com/y3mmnx9BnV_R6chXaRjDUJZtsuoiDeHwU4GTMGY2r9wezg7gBS1FqlaeKp5kTCSueJ6mCGwqPFWoLrirdXrnO3gEjdTimLiVag-LU2EKeOmy1slgq_J1-31Ip3QGe2qEZ_xGNBj94qGjSrc8Wl1UDFW4e3ckwLdeFpVSurF5V8gFjg?width=1024\u0026height=679\u0026cropmode=none",
        "https://eipu0a-ch3302.files.1drv.com/y3m8bubKT71eI9c2VGmz3lp06xME-aMml_ZbdInqmNPFPb88n4GRgZd3wh--5HB8YjYnStarIg2keoAzHRcr_zd9D5cJ6Ssk5nX6Z3boS4F2DNh-yUsQ_2p7fp1B7T4GhMS3vH92XeictiAof5iQMD2QjgYc2S_6dws1flZZXnstB4?width=1024\u0026height=679\u0026cropmode=none",
        "https://d4pu0a-ch3302.files.1drv.com/y3mNDgGc6ytxLmXg6jd0SyH7bYN_W26V1b5fACA8QYW5QsPyfG0vmAEYs10NuGl-T-zpOvwK7hTyrKF5GVB3narjsAM1LTbmxSKmkNzMRekdE0i-DwfWNHp19fk6UdCJEhpf4jByTKsYMixW3DnhzBummGVdSC8LXTKnmRnxdDyskA?width=1024\u0026height=679\u0026cropmode=none",
        "https://qnhbwg-ch3302.files.1drv.com/y3mpTnPly3sV2Ef3eC5VdSv4OsmCdOG6ka_CZXxAdMOGGiyemJNWFtDEXU1TeuDLlmuInASX8GAq2SEm3MhCbFhgwljUcIdzclZenO-kvmwqIQAUvuIbgUQo2xNm8geza4BnbZHuiyjgRMJidsnZvVEH2_G2whcEXrmIHVtaSywrvY?width=1024\u0026height=683\u0026cropmode=none",
        "https://ro2dcq-ch3302.files.1drv.com/y3msuL2D8HDMscscAZzmKPPnJyitKizAhk61r0c7nxRLWbxt2r3QhEhe0NkyidqcM4lGq7W_AzyltixUvnV26UCYXTezcN2na51-P1q09o1q1KF3-9ohuXY2rcLRdtgOyVPTcbPnRpJciTaWgZNjfCMw6t42p1yPECWWIfKJxHQDBs?width=1024&height=683&cropmode=none",
        "https://so2dcq-ch3302.files.1drv.com/y3mq9VYDmFwJSyewH85bNDPszo-bMDxbTKuYWrrfUTvtRbQueD4D520fIi_nAGnQhc3HuFFyW53tJY_5PJOWXYsENxM4fAukYmn-AxqHJK7RQx39uBURueY-PjZhRHA20xoiXJ86bDwKq6TjJ3T3YqWpcsxmxVwz7Rx_G1AMLaxzqI?width=1024&height=683&cropmode=none",
        "https://pu3oqa-ch3302.files.1drv.com/y3mFLltA3RjH_Zp9fznOOqelSX5fgZck4feD12Q35PZ6oa_ijeh0q-yTUzT-g2Il56C7xTQHamwFCdI97gu6D5NmrDUWUJDvZfzm8O6IopHRU6EWe_GsFrpLNehXQDu-fbG8FBgb9fVfv3UgD35hPXvIz9DDeAYkeiKaCUCork-HZE?width=1024&height=683&cropmode=none",
        "https://qp3oqa-ch3302.files.1drv.com/y3mytM4a3iLxKlFbV7lMaeOisPtV-cTdeCr-TWsd47r2xvwdbTrR3-Ca5xbeDFV1JhT7mPOtaWrUBrGgU7p91ZGOJfz7Mx5hyVtkyHH4vahfu40G4IBL6daLtodCPKYvd-tFGVwvncms7gtI7hPIljYontFutBQGtXLn1clLpw6DfA?width=1024&height=683&cropmode=none",
        "https://pu25wg-ch3302.files.1drv.com/y3miEypZafyFGcI2y4eij1eurUjRq9EKSucWSdhaJrQwD25ZIiw2QKH-9YLIytGh6ab6fJkUzKswsHpn3BhWVinmriqPDDsJ6_nt1ZjkAO7iI2RIWHQ2GGTdt4E52BUxXfD9rRmvCEarnYwA-TpJr6PIw9QK8JuOSIexEfk5KnNF7I?width=1024&height=683&cropmode=none",
        "https://ro25wg-ch3302.files.1drv.com/y3mnQE1zWoFhn5Dh4iviI0nXUNskm5yFvpezS5w8CQboP8vx0cBzZTf4hte9L8vgqc6XkF5PuzGvcjYK3GTCf7qcAL6NVZAVdLGTBNj14A092gFV52sAb_Ot2Td7ff8bBbEUf3wk1nK1zPxT0kgCK7MQtSbEj5lvMQFu9IL9DOoznk?width=1024&height=683&cropmode=none",
        "https://se25wg-ch3302.files.1drv.com/y3mf8vDXWvvB1Z-TM9ekQ7rTOHFkuvDBDMQUOClJ1qIfThmwc9V_uZ4E8fUIs2uQyGLKqL5SDOgMA7N-Mc1jVu-HhAnDIQd8D5q3XZXAa33w8WmQ23UTi2trzCFjTXiHfyrvbpjOra3j3xrnFu5Noas6Pv5iCwsfQZ0dua-1PSt3Dc?width=1024&height=683&cropmode=none",
        "https://pp0sda-ch3302.files.1drv.com/y3mcNi8LMTJErBj5cZ-nPvyrPhGNNT0KVacCX9NysKneVtQD9Agfm1qTR06RNjQR6FRslIDtv2JXVed799yT0LASdUXsTKH_h3csfEmUrPj_AtDb3YMkCmhUVyg3HdnM83TAEqh2LSQLMQWZJu59xxiuZXB8yD51khsiKaidj51_m0?width=1024&height=683&cropmode=none",
        "https://so0sda-ch3302.files.1drv.com/y3moUsrBU0UiBCs-ZuwV-JK2YnzljggxO_5EqHmg2fqOEISg6q4zncQS6Cl0l-3FWgOsrF8yHCh_It48Geh24yfXw6MBrHeMGL--RurpYl1bNg55kxnUJLe-ki-iUzJ9C6QfZc6TeHYoptyOr_qwRD9CNNth65-xB7hqqPPUKGpdnU?width=1024&height=683&cropmode=none",
        "https://1tnvja-ch3302.files.1drv.com/y3m44kb6UbFW0TCVz-4-vDj8y9yUnUFzI7oCCjrCUhJWPwI3W2qYa6Jj96C1RDMiOX050UrMEcUYOeNMU_ZLD3v_OnRnIN_cVYd9IS_SeMC_-00OcAyw6ttazAOS1vBwmcO-alzXdgWbGkhsQDrAUgeN_O_NDNYuRbNVlzihJr2XOU?width=1024&height=683&cropmode=none",
        "https://zdpufw-ch3302.files.1drv.com/y3mQgTgWWJ3efMr0Px-qPuL-Si3o4bE1kb2uclRBJxaRR0cKvJte4eJiw1xAEorzN_o1SEo4tUQF-faG-S1IoFV3NEYLyw6FZdBI21VhBfIA1etG4hwHV9CXKM9rSzOxgom0fDU-uDPm_GL225n2-e8ZkBtPg2wnOokT5VFV7OxOqc?width=1024&height=683&cropmode=none"
    ],
    "The Beach":[
        "https://3bpsuq-ch3302.files.1drv.com/y3mEl3ZaxeUBqWgLWdmk7g81fAeu4RaK4wLJcIPA4KC8FwCxRgTBt-r0B3aPWgNlsXRLXazMp9ldHPNdsG5Pwg2gCLF_XQUDlmC15A9Dm_MraPzxZS9121ARvWBg8SfIYQa_giVPmMpS5CRF7b1MhjNoBGzLX2lWSX6XlNH1FC7gco?width=1024\u0026height=679\u0026cropmode=none",
        "https://1hpsuq-ch3302.files.1drv.com/y3mbM9hZsnc67HaoD2BVEn_h7xY8OPf7lP15oatEBO_lcjFEWMLOMeLZ9xiyO46GtDr9fE_O6JsSx7Xzyz6hELvmpTKJJ6OH5QV5mxBIsBDmHqKceA8xT3XOP3_gv5fQfVA3D8VX9svet-WWvelcmbL3R21RHfYiMzGiBSF63onSDc?width=1024\u0026height=679\u0026cropmode=none",
        "https://3rpsuq-ch3302.files.1drv.com/y3mWZMRzISLeH9kVQyxrf4IC0SGAbH3UCIkf36DhTPtPtwbotNzNJhnA0gvUU8f4FcaGOuswrGOLVjLBvoHlH7O41PUqgAyapNdfCHXrKKQ_KCypS8QUGkNB4ul9Mm7bxD6hYdRSBw27sqIyejnNNX2qsRZclQUgkem7MLa4CURmOM?width=1024\u0026height=679\u0026cropmode=none",
        "https://2bq3ra-ch3302.files.1drv.com/y3mleLYRgOaQfzyX5zIi9-KfU4oo8Xjbg58l4SQPXJY2vjft0nPrP2QJs-AhRXA6Piwh-ebha9-lPXs60mKPADkJzzPWG5enIU8OKXMIS74Z-yMzvAQALmuJ5Bspn5vDRDfdnAgwCyk4ztlkY6J-mLCgSbXkDwJajPtZMt7qvYhXUE?width=1024\u0026height=679\u0026cropmode=none",
        "https://0xq3ra-ch3302.files.1drv.com/y3mcK6ef19y_gaDy0WZU-2ocED0CELvt0F98hlxjNGyLLDR5dt-raeE-V5XBg1nsxp8Nm-eeOpQ3_RSTymYW1fojQUy4nCsHn2mlksfyHTYocnZFgUJ5TmdDK5RXOhsuQ9h3p6OGLhZd9_LUE0s4ulWb8Xm89htgC3_ammgh7xFWYU?width=1024\u0026height=679\u0026cropmode=none",
        "https://0hq3ra-ch3302.files.1drv.com/y3mJZL-Jxd4UXG20uUhXkT5OlgZjCaE2-31o3c12avkN5dW8w2p8TlcgUx-8kurUfbD2FXT_Ddw3ZXSQKd1ZyOXbOuChieLmYv-ALRaxmEyD-gYOhfrjmNBOdv6BywWSsSxaamiBQmxFpq4jsq7820PHtgmn-2GLWPcKuZpgILxbtc?width=1024\u0026height=679\u0026cropmode=none",
        "https://1rqiog-ch3302.files.1drv.com/y3mSd0i2tlwkePF851cMOH5zXY4iO89rw5LbXo4i-c2GNi0w9OBV8Y5JL2_WUW9yFoMYuyg5mpkmBmwuEpTIBWwNIVPQQu_FQwTAqK8hz5IXv7CGoMh52cdZH3_Tl38eKN07QkL8_rkPfoRGqAw2IcMnj6LGD5axKEvzF9PL3ozT7c?width=1024\u0026height=679\u0026cropmode=none",
        "https://2rq3ra-ch3302.files.1drv.com/y3mv6DWmzagRyRQ6es21z5Qnb2AvfbHWaWX0jLvO05KnWFw6Ux2yMWAy6_sqWaTeZl2lnj_kPIpz-jd7zgI2Tb_D8Gnwr6k2hg1yYsXGYzrMiAWpWMhzmrgek5tAaGEL6tBVrIVSYxlhGSlV6QqIy2ocmfWI3beCOCw0wrPNRJPEpk?width=1024\u0026height=679\u0026cropmode=none",
        "https://1xq3ra-ch3302.files.1drv.com/y3myiTd_vvWBy2bZUM4sf7eQwxRsI0DaebUragIFI8XfUGJxHBn3mon4qdi8XOg3sQ-8MFKTU-VBhiOTWeLPq7-dUBqjC1zJjG0Gwh4B6kqsf6Kgwh248Suvr4dWpyqBf0b-x6YSTPUHLBKlQC2rvBRWlFKSQib0O37MXDf8xx3uCI?width=1024\u0026height=679\u0026cropmode=none",
        "https://1hq3ra-ch3302.files.1drv.com/y3mRSXGEYSObtl4eCxepMSEfC_X2Grv6M9paIIrtkIX8GIYn7zaD2u_FlUunaBJennhoQTDOnFRvDi8qXCfsD24Id8XZodVs8nB8TIO8YYSs8KFHZUGv6D_UGoHQPEfdEQ6xwtRwgyZVbOFnVZ3mAJ0Hn9LUX9azf4SO_vQTqjqfNc?width=1024\u0026height=679\u0026cropmode=none",
        "https://3rq3ra-ch3302.files.1drv.com/y3mo5wehOD4Yj8jAkAhmA9D-8pHQKUIhkqZl65pqAI3iotEac1ion1BjZnHB9KQR-BojQjl6sCUQxFNtV0l_fnSFIoCm4Os5fWhUlSRxGOZgr9OwOrbYTrCMoNtfrsM8VqOxs2KOexaP-r4Mp-RdfG6-5X5xOycKgG8zyONBBYmgHU?width=1024\u0026height=679\u0026cropmode=none",
        "https://3bq3ra-ch3302.files.1drv.com/y3mXiKoyN_zcSweaWVUPTXGR4_kXCW2WXCoMxu2vR3wSDbo0S-2EefJEBpLIKdkGtqyTfzWJ2WxPq7uaVuc6HShvKhknFOVuzdVlSFGaqVrv_D1QO81KJi-JZ82acxZ8OIFi71bWuEnlMUIZVMIcheSXokXRMA0_Uy4PWpjV7HM5Aw?width=1024\u0026height=679\u0026cropmode=none",
        "https://1bqiog-ch3302.files.1drv.com/y3maaPUVNzI6bd1AeASja8_M6sI_72GaE36H5RrUSJK3lNhXWp37UKZFklDIULuH6ga8d_XdY5g_lxql28Fx3bG4ZNJ-gvQeiVK-WhcYNc_UvYAabEaUKt7Yq2TtCsa8ENmMlyv60Eq7jkw-Mo-_p-ZxVtk4b1DJ4dLLQAhnBbnjSo?width=1024\u0026height=679\u0026cropmode=none",
        "https://0xqiog-ch3302.files.1drv.com/y3mKtBKp0aUGuIFR9C4YkXyXnVYHq6lgQs5Mr0oyVtSEFSpuxlA6hkW-AvIkeErJdj2YRLAjWW16Dv7AjPUTrz3jXpIo3k6rmXiPIhGyGJvg1J6zZHiUl8otQIvvC4lnooj5PvbND6BxuKlWMyIlCMMVb7HNMiVJFDZgDcLnQB_Rrk?width=1024\u0026height=679\u0026cropmode=none",
        "https://3bqiog-ch3302.files.1drv.com/y3mV7aYGJUAtm8A3_mtKUkVDTtZ-gHBEMRZhuV9jB_ZYfwIzjC-RikUWkUNpgVFi3gOjX_mfaf2LuW8xFMMJ976Hr3f6IIt_FHaqZ88Qp2gewui0uttfQFUOw2zpAM4_6bWU4FTz8t-ECWuaobkQ9w7VLNg7Z_ygp6csdRDd28RYEY?width=1024\u0026height=679\u0026cropmode=none",
        "https://2rqiog-ch3302.files.1drv.com/y3mGEMWIkAZgHelylpcsbZ-yxR0ir9xxlcmpymkuh6TrvHfzg_Xl05vUyqCIzw_YzzftBnjsVwxdF8UJ8fW_FSQIHP0vS9GCvU-Oz23QI4MM1dRIcHaCn6cKMQ2gyDEWjC33-gEB5G62OEB6voT6BaB-J7OgeS4fW3U9Zp7g3mwSQg?width=1024\u0026height=679\u0026cropmode=none",
        "https://qxhioq-ch3302.files.1drv.com/y3msZZgDhAJSQwIQSiMM4Wo6hi8tb_7CW5OYsqtcLUK6i8j7ZRXFxLiFmOu1XQ_t0ffICOWfrx7QKL13aVdnrjIjpIRc7XeZWSzzGGTS0IPai7HRukkudVYqYuImamweVV2q2cTn1SHMpmW-WzJR0j9D4t0ZRreHRrUIgii3khi6LM?width=1024\u0026height=683\u0026cropmode=none",
        "https://phhioq-ch3302.files.1drv.com/y3mr_sOTlIp2OZp6pIRQJxyIDgM7lgLLtZszBPpodGowj5JevdYsW8mK-NABuu4jqI22gjH9ehl3t2l9jN6FbY3_O2F6EBJPj-b5O4QoV70i7-IIoWbxwlr1_DZZjmCrmUzbWm_ft8U86tptAw_naxk_tlexBgdm4_RuzGdQsjlQZc?width=1024\u0026height=683\u0026cropmode=none",
        "https://pngsua-ch3302.files.1drv.com/y3m8DybNyy0SFvXWPckGUCldNtsVgPG5CQiu2R-nLYIfXQsklReIPPsoNH19cGj23GWqTcK7GAL4gofCI2xsCkqAcF51hNdOEOjFMwPFy3JXizrgE12jfss7dvwQQM4WU142lShRrbjHA6RSWm9yrQOgeqUYsLW6jm-UQy4O6wUZ2c?width=1024\u0026height=683\u0026cropmode=none",
        "https://rnhbwg-ch3302.files.1drv.com/y3mpAt6526Tpi7JhAtptKcP8MMnu72whKuCFjYPKc1IFzU1UUlYzNHYmH-ehPTNsDshAzwYwnpl8HN6GiN3e-TaFClCjTnNknn7OV78fwR_d_hP0hfrx6fi0tu_q9CO50sUvn1PaEO7lUbqfO52RlNevu1QYD4ItSF6BV0vvTAWRDM?width=1024\u0026height=683\u0026cropmode=none",
        "https://rxhbwg-ch3302.files.1drv.com/y3mVgWqLewoeBWhdhibYGRj2jmRYqCMViVkQW_M4Hm4ewJ0iYeX1v52TbJADbFeJAxIEVFvoB_ZkDLsAmewz0GCOpGxIK_ugxcoxr1sd6-vNonKi4FCwType85--GPK82NutL6Wx_7SlW1-PGgztQAqL3rufWmMli1ByzIFaV6fEVs?width=1024\u0026height=683\u0026cropmode=none",
        "https://pxhbwg-ch3302.files.1drv.com/y3mtdyQ4_L3kRy8dX-7yz6hQIaB8cUm8Yr08bLLaqes8FMZd6e8m3N28mpN_oWggSSIm2kazt2l7xthIWz87YFDKPnS5GcnL8Byen0ZgH1BXcJD_j-w15pZSMpAS0K1kLgvFn7MSB9NFkpTZOvEm2q2akX1-Vtcy9Epi5ebRUeHSvE?width=1024\u0026height=683\u0026cropmode=none",
        "https://qxjczg-ch3302.files.1drv.com/y3mhCjjLB3QM5I9TF-O_Xv9TkY4RjMj6ci50ZwcImN4EAW7cO0NAr34_6nPl0D5P_CJnKpi3WiOMSN_GDDY8U2Pzx_BmkmXeNGBUMZffXJo1NlV66JQXrI-efN3HgdJ0lXkrWAgEjJaWqKnvD2MeCdf8hRkWaNJWHRVHC9BUkkbqfE?width=1024\u0026height=683\u0026cropmode=none",
        "https://p3jczg-ch3302.files.1drv.com/y3mnscbTRlNzXLV6uTqjyzUPw5BKDE81jWQ0j-EOSByhiqyW7mryR93zVWvJewcwwj50Ig0nBq2Q5Z4UKaGgaXko6FnQQ1_efVgY2JMLbJO4zy10q_bPHmkot9qS1YZ_tGvk038sC-J2iooErgBcP0gIb64vi1S1eeUMixgd5LvO4E?width=1024\u0026height=683\u0026cropmode=none",
        "https://qxjjfq-ch3302.files.1drv.com/y3mvPJpWTRwx7GHGrEYoPw2lWSXsU1WV2i7zLmPJj8FRHPKH12TSqhRTmfZpKsmOBLM5RBTnpchW5On26Uhb2K6V5fXKs6EAFGQYwGc3oDfpdHa1U__aN6WuB57GHZac1rJ79TLDWEj8J3brKaKi1ScRvLCynBqkE7YYkA6Fb9YJYw?width=1024\u0026height=683\u0026cropmode=none",
        "https://pxjjfq-ch3302.files.1drv.com/y3msRNZI_6aIqj5tcWIyTs5epGqhJKjel1jEGGWVC6exF4US_D4Ve6qDEX7vPt0KUBlMFayXvI4FshXIhLvgIxU6o4-YTKnwnPNceeFY7dDSvQe3u_xRku3CJfqtdSXuEVykOQR3mwu_xS1AjtL0sDHlkxebY30YBPzaTr8ztMdw6Q?width=1024\u0026height=683\u0026cropmode=none",
        "https://phjjfq-ch3302.files.1drv.com/y3mAtEVHASLpvCAveRmnS8KzrcFPyx8egKSuq70A18LOpA4w9B6p3fOaZMpACIzz5VEnICl3ZFjsGJUzwpE5iWx9uauk0sfm6qqDLZsiudCBfswnIDemthpYLFxMNLzpW2FtgR27kCiILLa9BJt6Vxy9U2xRGDQGtb75vkvgttk8FE?width=1024\u0026height=683\u0026cropmode=none",
        "https://pnjjfq-ch3302.files.1drv.com/y3mV4VqcYfFJFOlwYMwSHudJHLsXOlkJz1dNsSE5ct27DyTAChn2i0hGCsSd80B0s13yoQNSnnm3eDVOvxxO5Q4po3DWqVWxOev-ZdLAyBQttif2ANB5kwegzyfx3uccgr_wg3vDrC6tc_GgczvqvUErBZNjYX2lCF2K4BHOEtq6vE?width=1024\u0026height=683\u0026cropmode=none"
    ],
    "Pictures Without People":[
        "https://o3hbwg-ch3302.files.1drv.com/y3msPYtf95UtRlc_tr9WmEK9ea4ssUPpeUd35R01vhN-4nBTebOcCF2i9JL-sVArnZQTyqKVMhRqzX_mwtjnR2DU8AN1sBhVZAN3s6wranx1F1idXMCNmVwMk3oLVqbNAV0ghMfDORwKoZdL3NqEGclJmlEpoImIQJ-BRR0NHxTHng?width=1024\u0026height=683\u0026cropmode=none",
        "https://qhjczg-ch3302.files.1drv.com/y3mAUkARG4UKUrb63vh8HKm_hekaGW_C_7bCejc-lZBZLb-MKHN9VCFFk7vRatettilrqBnFxPlgsQkGK-HrqyU_et6M8w93UL94LQMDYAm9t4OfjwPhVQxJqxb9ZpNp_AgXChfTBlga-69uwocsePQkE68ZGmapeXFHixdKGAmmm0?width=1024\u0026height=683\u0026cropmode=none",
        "https://pnhbwg-ch3302.files.1drv.com/y3mIcYkBVWO3ljucKuTJEpvLLj3sUsCKwzHm1WmHj2tJ_5SCJOT4KcLT1tt6Ix9fRCGeTPgoFoY7MO3SQp8JE-PxNt7GEevYPISpbXHmvwuhsqtJPL_oSJsMTIapMrBr4d_uIZ6TALJNiwSBCF86KtbAwasRlzRF-m69qLIvA5vTLU?width=1024\u0026height=683\u0026cropmode=none",
        "https://cwq8cw-ch3302.files.1drv.com/y3m1z7cySzWBOAz9WZZTV2bsQdSfM0YMsG1Gs40FoetOgHcQBx321PP1tPDDjhmse6VqphZ_vUagqgyeUA0qdexWhWygpYEztXv50T96d8Yt8dBlEP7eFwfORCZMY1zbRW-83rqsXLOSNBDEOcUjdWeTw?width=1024\u0026height=683\u0026cropmode=none," +
        "https://egtx5w-ch3302.files.1drv.com/y3mQEAU3VgN89P3lO7rMBY6a35XtEVDreY_-mRCgF9c1VQcUKBjtkOthN7WT_SepDrDw0FvB1nUmsjj8ORKDiUAGkoqXyxwzGuLd7_XPTBRwydjPYH5KwMOt_EFqOrhjofr_do_EkcNeYNyLy71mFXxdA?width=1024\u0026height=683\u0026cropmode=none",
        "https://ewtx5w-ch3302.files.1drv.com/y3mubRgx3125IjiTAyBqEaFzp38jAW3lKIewkInPiWg37JijCMtbSSttc-2q4n2QAJNyTy_J9AEOhUxl1kyPIYGDMhZGtr92WeneQdn1AhN7mmMZP0Dd7RYO5OECZE9Erj3ws9YUDJJb_B1TKJSNxhFWg?width=1024\u0026height=683\u0026cropmode=none",
        "https://datx5w-ch3302.files.1drv.com/y3mjTRMNcmi3wmEdIrWeikUrpBSq-hlwiot9jz6bwE4MjPYBPcSMdZzX6NRlyI6ryaSNdEWItEUwjUjTr6WpxvY1gihDd3LBTGCuqagLSxsOxQ6mjuiLa0W9jwZbZVJ9lA1rtIoqn9238zBWIQoBt8Ucg?width=1024\u0026height=683\u0026cropmode=none",
        "https://dqtx5w-ch3302.files.1drv.com/y3m6aJJ3MIpfYMxYwWxnXkYe4H-2LDrr4Z_y3thjXbpa9zOmktu-JMTSge1SP5v4KXn4ZTjt4UUK1yNq7ZUnUIWai6wncBt5IvmLXNZ8yKe5HtTz_Ab7LXnhBnvRysMtOm80uJ9j9QAyyzoGyBmAQ2gnw?width=1024\u0026height=683\u0026cropmode=none",
        "https://se3oqa-ch3302.files.1drv.com/y3mihubNvjsOK7u6oxQVx_R2ean56pYc9qykGq4Quk8C1rLGh-GB_kR_Wrk-3uQXlaHFDS7TiqeyS-x3qcDC3NoC_iv_VoTmZR-NJbcxOI-TpArkbaaQmdkG0idIdNxIcc6gHzjBRAgM9nOvl9IS58Atm8A4vKdJs_VxHrQ1lWCmCQ?width=1024&height=683&cropmode=none",
        "https://qo25wg-ch3302.files.1drv.com/y3mNNT8uEgrX6xxXPx2fGitCiOUJEgBFsVGpJJWkgZfueLlO3iT5sJDNYQsWnOJir2uquSCgTViIOiCrqin8hLEyPnuurspzBvQNC2S-r1jg7UhD0u-CaVCgiZxXO2PmUTPcW5Scj8n5oEUEtTyamWmm6hczCPNiC3j7zIYntL_LRk?width=6000&height=4000&cropmode=none",
        "https://se0e5g-ch3302.files.1drv.com/y3mKGQwavswWClJoPudwb5SHOAtoL5XtoYE6lYf3fuuyIZeRrZwXluGwe2TWE9QYRqDCRULiy5d_gEKL-t3xwt7IZML4V92NK-aBp9VduY_7PY8t_uRv_LgDarhAHtw9Dc1wKaT_VMXmeYFaYoVybq5z9JaU1Oc1rwCmscNL9ykk0g?width=1024&height=683&cropmode=none",
        "https://ab3tcw-ch3302.files.1drv.com/y3mWSz4mnFV-GzO1ddNOPEawf8HIHuxA-VWnyQcT3DiIUTVHXLY27WkmaAtKpyNRTfYVjGUZYIPhTCXPntjG5XilvY0FC38CdZEarfwxPNo6ISt05GtGRRHNLqG6gV7hQ0ekg2aHs9wWeaaujFMmZqEC23A0MK57p5Ruxf-bYY7s1A?width=1024&height=683&cropmode=none",
        "https://b73tcw-ch3302.files.1drv.com/y3mM2rf_nLT6XASg9OVEJ-PBeMcJoGW5VbaFN2uV8nKx1jHDa9lhfkGtK7ch92n6urm4iPymMCT06GlFm1FowRTHhLBsOSTRcjPDjYPdMnD-E9ULRNFrTBqOtIUtUFxp4_Ew0_nTOVUP1uWS54rULdj7ZYxLDQZlcEDu8Z24gXEqmE?width=1024&height=683&cropmode=none",
        "https://br3tcw-ch3302.files.1drv.com/y3mEwVHXLT7e7zcpotCrzQO784MObHD1WqJsDTnvkO4Cp4tOX2N7tyvZh0axzOJlCRFYCyQ6idjGbczAd5PnU5arE-vfvD_UVzP0GuzGa2bKYDv6ihaElcGraJ9POBEhpvctSuQ65_39DNbwTd8rwc7KQh9NgJSmZnHbr_Au8309fQ?width=1024&height=683&cropmode=none",
        "https://c73tcw-ch3302.files.1drv.com/y3mZ3z18Awx8k9N66CIeAyO1xqjIqZytrrLR7i4OOJf3RvRsCiJxRHYDqM94-J-P8jwqhsg2Uq5dVruieJGA3niWGYI9YN8mzG1sofBJOjB8WypxPOCkJUZxt0epeXN0taEvt7YAm3CWp2Ay83mpv7raSX5ARIkELUE2U4nicVjxpg?width=1024&height=683&cropmode=none"
    ],
    "Vacation":[
        "https://ar2i6a-ch3302.files.1drv.com/y3m5ULb3JVwWXlD6Z_t2PThu_b32V7GWCwxvyVZDfWctM3nBWoisWZ8HrEi4-lAo82a0RteSkZuw5jyCGDNuw3QYB-SOBI3bHp7YszDnkvpa6aYeNOYC9iMBHyK9ROVBUSTl1s2wesz4ppaP4RtzMaIb-GA529QG8yL4aApZB2IZIw?width=1024&height=683&cropmode=none",
        "https://br2i6a-ch3302.files.1drv.com/y3mHZrnX1X_-0nvDLW9j0BZVPB4vpSUa2rVi_7aILaAcw7Y2SLiYQLI703Z_FRc-mIus5VUnW6sha7G5orTZHFs6XsPJkLHqltiChhlbk3g-162ebFrMoYOyvbiMtu1be4QDdt_D7W5HrYWPH3s68S8nwQvxxZbWdgmY4kVIgOILfY?width=1024&height=683&cropmode=none",
        "https://a73tcw-ch3302.files.1drv.com/y3m-Z78TJpbTaVl8j9CiKr4uH3VuovoFs2f9oiGMfTBbNtokq2D8ejgsBv9kzFJtYqVZaCDY1yVYpKPGpwEUxYrMaK3UZjW08vHhWwUD4ufiTGrB5Dul10WiqzLGCHK12z6cqlE9zKjSmlSUPzLpTYpgexQAYCQ8rxbdIo6qTjhWTM?width=1024&height=683&cropmode=none",
        "https://ab3tcw-ch3302.files.1drv.com/y3mWSz4mnFV-GzO1ddNOPEawf8HIHuxA-VWnyQcT3DiIUTVHXLY27WkmaAtKpyNRTfYVjGUZYIPhTCXPntjG5XilvY0FC38CdZEarfwxPNo6ISt05GtGRRHNLqG6gV7hQ0ekg2aHs9wWeaaujFMmZqEC23A0MK57p5Ruxf-bYY7s1A?width=1024&height=683&cropmode=none",
        "https://b73tcw-ch3302.files.1drv.com/y3mM2rf_nLT6XASg9OVEJ-PBeMcJoGW5VbaFN2uV8nKx1jHDa9lhfkGtK7ch92n6urm4iPymMCT06GlFm1FowRTHhLBsOSTRcjPDjYPdMnD-E9ULRNFrTBqOtIUtUFxp4_Ew0_nTOVUP1uWS54rULdj7ZYxLDQZlcEDu8Z24gXEqmE?width=1024&height=683&cropmode=none",
        "https://br3tcw-ch3302.files.1drv.com/y3mEwVHXLT7e7zcpotCrzQO784MObHD1WqJsDTnvkO4Cp4tOX2N7tyvZh0axzOJlCRFYCyQ6idjGbczAd5PnU5arE-vfvD_UVzP0GuzGa2bKYDv6ihaElcGraJ9POBEhpvctSuQ65_39DNbwTd8rwc7KQh9NgJSmZnHbr_Au8309fQ?width=1024&height=683&cropmode=none",
        "https://pjfmda-ch3302.files.1drv.com/y3mLKt6QY1LY9jHmkbJKejeyv75FocyIuOkaOavAhyTp6wrSnyNrsKNsxjK6S3PtC4nHLQSvvro3-qjuofzswrnvG5m5moF-Sa2oNxCubUwq1nPn-FwXwPqc-ykz5sqbYbM0kkz20_Rtr9CEzJQ2tbfj0DiwX5J41GKtu9U0zggkKM?width=1024&height=683&cropmode=none",
        "https://ozhlqw-ch3302.files.1drv.com/y3mwPoMlj24c1d5QItPMZRs7Gi5s2Hr-NJlrNtMU_BdrXarmoauINm09jWhaxX3vyNrEIa7m6xtJ5tgbHzbmdHcDutLmNVguexu2ujPJDbpwduqkf2_ti0qg06kGivs6iUpEUhXSMxYl_YppZwlQpQDwU_L9r5i9rwUMDh2W2-ojuI?width=1024&height=683&cropmode=none",
        "https://pzhlqw-ch3302.files.1drv.com/y3mKYuWljxVjadm2Ad_17TRzcc-RjGSOB3Ri_5DuOJ6Zvn1qqQGoQxVNDhp9uSJZXkVOxkm5vvSCvjktUuphOtHiYabYAdRt4U6nzXUDw4M6P_3iCMm_4Gl_bPfA9kz-XY85JKKySZZmf2WiEv7RH73se37aAfdTzkDyAL_1IjKzNQ?width=1024&height=683&cropmode=none",
        "https://njgcxq-ch3302.files.1drv.com/y3mrrrNiL_ibmb-DVuS_nNo8S8dMEg8bGJmZrqH9V-cKgcnXRtCDZTdIMvy2Q9pbtUTZP0Uct2_qq5s-r16eeaQRktyQBzVeMzkjkffT9NbSriH9HWqU3ZThoJ6D18xZPRnXO9i5x-HnL7bTRl6f9eXv6EWbn38U_a26-7MQQc32GU?width=1024&height=683&cropmode=none",
        "https://pjgcxq-ch3302.files.1drv.com/y3mLtt19E7bPxclqcfI1kv9s_opEJCsfbJYY4i3pijHfZvwbK2EqMtwYOkkuMpyDQ0kOaHIDhvOXognJlPsLjsMYqoMV_95iV_RaT5rny6EfaqFlm4tPocB-6z5iXzCWn5q85p2uqHp6DLZ9euymLbPLam5lZOz6pQouaSJn52LRzw?width=1024&height=683&cropmode=none",
        "https://njeb6q-ch3302.files.1drv.com/y3ml-kdcHVkH3iwdlhXtaKytjrU-FIXCE28Qh_BFANIiHjXEsfV5whgUU03NbjM_E5GD7Rt_W2ZMzGamnGvQ59VOdBMTIfTrapllF45q5DocI73KIdkVt4PCSGHgQWX4I5ENbeZDGv-uPtGz8G2n9KqhiH1hSsRf2V_92HZCJZOiac?width=1024&height=683&cropmode=none",
        "https://nzeb6q-ch3302.files.1drv.com/y3m9ko4tSFQPb7xRwg1nI4vqR3q_xW0YcMH4HiI0SXS1ZZZZ6f01qOq6NKYkFydFZdSpsiyJl63ocfYHcl0l_iPyg9M21_rSZFxDlzeRUyU7fPwHwE_9NFunc48lFxbqS3f1ls4D53i6-lSFQ43gfBBdH8Wq6gUerOmTynpeemMIEw?width=1024&height=683&cropmode=none",
        "https://ozfflq-ch3302.files.1drv.com/y3mPX0QmibdhVmidlZCdbQ2NHCMu4igmBDUdhvwmEUAM9kqnR8Je9kVHQXDcC-hPbZyzrayXpuhX8XYzUuMCepyerhhuapK7QEWzh1jUKXTehW1YRd8OVnLhTXOTAwaBFea1c-7M00vl6hn7PAyPSYgFJtjeByEtD14FxKB5g2PG3k?width=6000&height=4000&cropmode=none"
        ]
};


//put all pictures in single array for background changes:
var allArrays = [];
for(arr in albums){
    var a = albums[arr];
    for(i=0; i<a.length;i++){
        allArrays.push(a[i]);
    }
}

//function to handle changes:
var backgroundChange = function(){
    var whichImg = Math.floor(Math.random()*allArrays.length);
    document.body.style.backgroundImage = 'url('+allArrays[whichImg]+')';
    //console.log(allArrays[whichImg]);
    setTimeout(backgroundChange,10000);
};

window.addEventListener("load",backgroundChange);

//alert("\u0026");

var displayPic = 0;

var thisAlbum=albums["Disney"];

//function to change picture
var newPic = function(){
    $("#picture").fadeOut("slow",function(){
        document.getElementById("picture").style.backgroundImage = 'url('+thisAlbum[displayPic]+')';
        $("#picture").fadeIn("fast");
    });
};

//function to start slide show:
var startShow = function(album){
    thisAlbum = albums[album];
    console.log("clicked on "+album);
    console.log("first url: "+thisAlbum[0]);
    document.getElementById("slideshow").style.display = "initial";
    document.getElementById("buttons").style.display = "initial";
    displayPic = 0;
    document.getElementById("picture").style.backgroundImage = 'url('+thisAlbum[displayPic]+')';
    document.getElementById("left").addEventListener("click",function(){
        if(displayPic>0){
            displayPic --;
        }else{
            displayPic = thisAlbum.length-1;
        }
        newPic();
    });
    document.getElementById("right").addEventListener("click",function(){
        if(displayPic<(thisAlbum.length-1)){
            displayPic ++;
        }else{
            displayPic =0;
        }
        newPic();
    });
    document.getElementById("picture").addEventListener("click",function(){
        if(displayPic<thisAlbum.length){
            displayPic ++;
        }else{
            displayPic =0;
        }
        newPic();
    });
};

//Fill Header with albums
for(arr in albums){
    $('#album_names').append('<input type="button" id="'+arr+'" class="album_choices" value="'+arr+'">');
    console.log(arr);
}
$('.album_choices').click(function(){
    console.log(this.id+" clicked!");
    startShow(this.id)
});

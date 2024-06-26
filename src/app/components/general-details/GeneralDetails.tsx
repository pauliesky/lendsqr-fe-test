import React from 'react'
import './general-details.scss'


const GeneralDetails = (user: any) => {


    console.log(user.user.username)




    return (
        <>
            <div className='details_container'>
                <section>
                    <p>Personal Information</p>
                    <div>
                        <span>
                            <p>FULL NAME</p>
                            <p>{user.user.username}</p>

                        </span>
                        <span>
                            <p>Phone Number</p>
                            <p>{user.user.phoneNumber}</p>

                        </span>
                        <span>
                            <p>Email Address</p>
                            <p>{user.user.email}</p>


                        </span>
                        <span>
                            <p>Bvn</p>
                            <p>{user.user.BVN}</p>

                        </span>
                        <span>
                            <p>Gender</p>
                            <p>{user.user.gender}</p>

                        </span>

                    </div>
                    <div>
                        <span>
                            <p>Marital Status</p>
                            <p>{user.user.maritalStatus}</p>

                        </span>
                        <span>
                            <p>Children</p>
                            <p>{user.user.children}</p>


                        </span>
                        <span>
                            <p>Type of Residence</p>
                            <p>{user.user.residenceType}</p>


                        </span>
                    </div>
                </section>
                <section>
                    <p>Education and Employment</p>
                    <div>
                        <span>
                            <p>LEVEL OF EDUCATION</p>
                            <p>{user.user.education.level}</p>


                        </span>
                        <span>
                            <p>EMPLOYMENT STATUS</p>
                            <p>{user.user.education.employmentStatus}</p>


                        </span>
                        <span>
                            <p>SECTOR OF EMPLOYMENT</p>
                            <p>{user.user.education.sector}</p>


                        </span>
                        <span>
                            <p>DURATION OF EMPLOYMENT</p>
                            <p>{user.user.education.duration}</p>

                        </span>


                    </div>
                    <div>
                        <span>
                            <p>OFFICE MAIL</p>
                            <p>{user.user.education.officeEmail}</p>


                        </span>
                        <span>
                            <p>MONTHLY INCOME</p>
                            <p>{user.user.education.monthlyIncome}</p>


                        </span>
                        <span>
                            <p>LOAN REPAYMENT</p>
                            <p>{user.user.education.loanRepayment}</p>


                        </span>
                    </div>
                </section>
                <section>
                    <p>SOCIALS</p>
                    <div>
                        <span>
                            <p>TWITTER</p>
                            <p>{user.user.socials.twitter}</p>

                        </span>
                        <span>
                            <p>FACEBOOK</p>
                            <p>{user.user.socials.facebook}</p>


                        </span>
                        <span>
                            <p>INSTAGRAM</p>
                            <p>{user.user.socials.instagram}</p>


                        </span>
                    </div>
                </section>
                <section>
                    <p>GUARANTOR</p>
                    <div>
                        <span>
                            <p>FULL NAME</p>
                            <p>{user.user.guarantor.fullName}</p>


                        </span>
                        <span>
                            <p>Phone Number</p>
                            <p>{user.user.guarantor.phoneNumber}</p>


                        </span>
                        <span>
                            <p>Email Address</p>
                            <p>{user.user.guarantor.email}</p>


                        </span>
                        <span>
                            <p>RELATIONSHIP</p>
                            <p>{user.user.guarantor.relationship}</p>

                        </span>


                    </div>

                </section>

            </div>


        </>
    )
}

export default GeneralDetails

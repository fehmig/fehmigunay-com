import React from 'react'
import { useTranslation } from '../translate/TranslateContext'


const LeftSkills = () => {

    const {translate} = useTranslation()

  return (
     <div className="skills__content">
        <h3 className="skills__title">{translate('left-tech-title')}</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">React, React Native</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">ExpressJS</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Angular</h3>
                        <span className="skills__level">{translate('basic')}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">NextJS</h3>
                        <span className="skills__level">{translate('basic')}</span>
                    </div>
                </div>

                
            </div>

            <div className="skills__group">
                

               

             

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">MSSQL, MySQL</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">ASP.NET</h3>
                        <span className="skills__level">{translate('basic')}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">GIT</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Machine Learning</h3>
                        <span className="skills__level">{translate('intermediate')}</span>
                    </div>
                </div>



         
            </div>
        </div>
     </div>
  )
}

export default LeftSkills

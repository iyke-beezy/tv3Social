import React, { useState } from 'react'
import './styles.scss'

import { Steps, Button, message, Input, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons'

const { Step } = Steps;



const DataCapture = props => {
    const [current, setCurrent] = useState(0);
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState(null)

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    const handleGenderChange = e => {
        setGender(e.target.value)
    }

    const ageOptions = [
        { label: 'Below 18 years', value: '-18' },
        { label: '18-24 years', value: '18-24' },
        { label: '25-34 years', value: '25-34' },
        { label: '35-44 years', value: '35-44' },
        { label: '35-44 years', value: '35-44' },
        { label: '45+ years', value: '45+' },
    ];

    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]

    const steps = [
        {
            title: 'Age',
            content: <Radio.Group
                options={ageOptions}
                onChange={handleAgeChange}
                optionType="button"
                buttonStyle="solid"
                value={age}
            />
        },
        {
            title: 'Gender',
            content: <Radio.Group
                options={genderOptions}
                onChange={handleGenderChange}
                optionType="button"
                buttonStyle="solid" />
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className="Data">
            <div className="main-content">
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        </div>

    )
}

export default DataCapture

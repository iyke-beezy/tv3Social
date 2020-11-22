import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'

import { Steps, Button, message, Input, Radio, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { uploadData, resetAuthForm } from '../../store/Admin/admin.actions'

const { Step } = Steps;
const { Option } = Select;


const mapState = ({ admin }) => ({
    uploadSuccess: admin.uploadSuccess,
    uploadFailure: admin.uploadFailure,
    errorMsg: admin.errorMsg
})

const DataCapture = props => {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(0);
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState(null)
    const [region, setRegion] = useState(null)

    const { uploadSuccess, uploadFailure, errorMsg } = useSelector(mapState)

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    //upload success
    useEffect(() => {
        if (uploadSuccess) {
            dispatch(resetAuthForm())
            props.setLoading(false)
        }
    }, [uploadSuccess])

    //upload failure
    useEffect(() => {
        if (uploadFailure) {
            message.error(errorMsg)
        }
    }, [uploadFailure])

    const handleGenderChange = e => {
        setGender(e.target.value)
    }

    const ageOptions = [
        { label: 'Below 18 years', value: '-18' },
        { label: '18-24 years', value: '18-24' },
        { label: '25-34 years', value: '25-34' },
        { label: '35-44 years', value: '35-44' },
        { label: '45+ years', value: '45+' },
    ];

    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]

    function onHandleRegion(value) {
        setRegion(value)
        // console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    const uploadDemo = () => {
        dispatch(uploadData({
            age,
            gender,
            region
        }))
    }

    const steps = [
        {
            title: 'Age',
            content: <Radio.Group
                options={ageOptions}
                onChange={handleAgeChange}
                optionType="button"
                buttonStyle="solid"
            />
        },
        {
            title: 'Gender',
            content: <Radio.Group
                options={genderOptions}
                onChange={handleGenderChange}
                optionType="button"
                buttonStyle="solid"
            />
        },
        {
            title: 'Region',
            content: <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Region"
                optionFilterProp="children"
                onChange={onHandleRegion}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="Ashanti Region">Ashanti Region</Option>
                <Option value="Bono Region">Bono Region</Option>
                <Option value="Bono East Region">Bono East Region</Option>
                <Option value="Ahafo">Ahafo Region</Option>
                <Option value="Central Region">Central Region</Option>
                <Option value="Eastern Region">Eastern Region</Option>
                <Option value="Greater Accra">Greater Accra</Option>
                <Option value="Northern Region">Northern Region</Option>
                <Option value="Savannah Region">Savannah Region</Option>
                <Option value="North East Region">North East Region</Option>
                <Option value="Upper East Region">Upper East Region</Option>
                <Option value="Upper West Region">Upper West Region</Option>
                <Option value="Volta Region">Volta Region</Option>
                <Option value="Oti Region">Oti Region</Option>
                <Option value="Western Region">Western Region</Option>
                <Option value="Western North Region">Western North Region</Option>
            </Select>
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
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()} disabled={age || gender ? false : true}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={uploadDemo} disabled={region ? false : true}>
                            Done
                        </Button>
                    )}
                </div>
            </div>
        </div>

    )
}

export default DataCapture

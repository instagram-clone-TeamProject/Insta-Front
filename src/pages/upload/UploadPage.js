import styled from 'styled-components'
import Header from '../../components/header/Header'
import 'antd/dist/antd.css'
import { useDispatch } from 'react-redux'
import { Modal, Button, Upload, message } from 'antd'
import React, { useState, useRef, useEffect } from 'react'
import { BsHouseDoorFill, BsHouseDoor, BsPlusSquare } from 'react-icons/bs'
import VideoImage from './video.PNG'

const Wrapper = styled.div`
  display: flex;
`
const CardWrapper = styled.div`
  width: 650px;
  height: 300px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`
const ButtonWrapper = styled.div`
  width: 650px;
  height: 250px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

function UploadPage() {
  const dispatch = useDispatch()
  const { Dragger } = Upload
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [uploadState, setUploadState] = useState({
    status: 'idle',
    member: {
      image: '',
      upload: false,
    },
  })
  const onPreview = async file => {
    let src = file.url
    console.log(file)
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
    console.log(image.src)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancle = () => {
    setIsModalVisible(false)
  }
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
        console.log(info.file.url)
        setUploadState({
          status: 'resolved',
          member: {
            image: info.file.url,
            upload: true,
          },
        })
      }
      if (status === 'done') {
        console.log(`${info.file.name} file uploaded successfully.`)
        console.log(info.file)
      } else if (status === 'error') {
        console.log(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }
  const buttonprops = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <Wrapper>
      <BsPlusSquare size="22px" onClick={showModal} />
      <Modal
        title="새 게시물 만들기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancle}
        footer={null}
        width={680}
        style={{ borderRadius: '10%' }}
        centered="true">
        <Dragger
          {...props}
          onPreview={onPreview}
          style={{ backgroundColor: 'white', border: '1px solid white' }}>
          <CardWrapper>
            <img src={VideoImage} style={{ marginBottom: '5px' }} />
            <img
              src={uploadState?.member?.image}
              style={{ marginBottom: '5px' }}
            />
            <p
              style={{
                fontSize: '23px',
                textAlign: 'center',
              }}>
              {' '}
              사진과 동영상을 여기에 끌어다 놓으세요
            </p>
          </CardWrapper>
        </Dragger>
        <ButtonWrapper>
          <Upload {...buttonprops} onPreview={onPreview}>
            <Button type="primary" style={{ borderRadius: '5px' }}>
              컴퓨터에서 선택
            </Button>
          </Upload>
        </ButtonWrapper>
      </Modal>
    </Wrapper>
  )
}

export default UploadPage

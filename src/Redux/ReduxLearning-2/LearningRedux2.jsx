import { useEffect, useMemo, useCallback } from 'react'
import { Table } from 'react-bootstrap'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { actions } from './actions'
import { store } from './store'
import './learningRedux2.scss'
import selectors from './selectors'


function Element({modal, item, action, idKey, actionType }) {
    const { [idKey]: id, name, price, vegan } = item
    const dispatch = useDispatch()
    return (
        <tr>
            <td>{name}</td>
            <td>{price.toFixed(2)}</td>
            <td className='center-redux'>{vegan ? 'Vegan' : '-'}</td>
            <td className='center-redux'>
                <button type="button" onClick={() => dispatch(action(id))}>
                    {actionType ? 'Add' : 'Remove'}
                </button>
            </td>
            <td className='center-redux'>
                <button type="button" onClick={() => {
                    dispatch(modal(item.id))
                }}>
                    Preview
                </button>
            </td>
        </tr>
    )
}

function TableWrapper({ selector, action,modal, actionType, idKey }) {
    const list = useSelector(selector)
    const generateList = useMemo(
        () =>
            list.map((item) => (
                <Element
                    key={item[idKey]}
                    item={item}
                    action={action}
                    actionType={actionType}
                    idKey={idKey}
                    modal={modal}
                />
            )),
        [list]
    )
    return (
        <Table className='tableAdjustments' striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Vegan</th>
                <th>Action</th>
                <th>More info</th>
            </tr>
            </thead>
            <tbody>{generateList}</tbody>
        </Table>
    )
}
function Modal() {
    const dispatch = useDispatch()
    const closeModal = useCallback(() => dispatch(actions.hideModal()), [])
    const item = useSelector(({ list, showModal }) =>
        list.find(({ id }) => id === showModal)
    )

    if (!item) return null
    const { name, animal, color, price, vegan } = item

    return (
        <div
            className='ModalRedux'
            style={{
                backgroundColor: color
            }}
        >
            <p>Name: {name}</p>
            <p>Animal: {animal}</p>
            <p>Color: {color}</p>
            <p>Price: {price.toFixed(2)}</p>
            <p>Vegan: {vegan ? 'no' : 'yes'}</p>
            <button type='button' onClick={() => {
                closeModal()
            }}>X</button>
        </div>
    )
}

function Lesson18() {
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://simutis.dev/api/generate-shopping-cart?limit=10')
            .then((response) => response.json())
            .then((data) => dispatch(actions.setListAction(data)))
    }, [])

    const modalCheck = useSelector(selectors.selectModal)

    return (
        <div className="LearningRedux2-container">
            <TableWrapper
                modal={actions.showModal}
                selector={selectors.selectList}
                action={actions.addToCartAction}
                idKey={'id'}
                actionType
            />
            <TableWrapper
                modal={actions.showModal}
                selector={selectors.selectCart}
                action={actions.removeFromCartAction}
                actionType={false}
                idKey={'customId'}
            />
            {modalCheck ? <Modal/> : null}
        </div>
    )
}

export default function LearningRedux2() {
    return (
        <Provider store={store}>
            <Lesson18 />
        </Provider>
    )
}

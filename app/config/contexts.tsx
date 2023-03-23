import React from 'react';
import { getVehicleInfo, getPaymentInfo } from '../common/utils/server/getServer';

const Context = React.createContext(null);

const { Provider, Consumer: ContextConsumer } = Context;

interface serverReturnData {
    success: boolean
    lists: Array<any>
    lists_count: number
}

interface TotalInfo {
    plate_number: string
    name: string
    phone: string
    created_on: string
    modified_on: string
    uuid: string
    no: number
    goods: string
    start_on: string
    end_on: string
    card_number: string
    amount: string
    payment_on: string
    ticket_vehicle_uuid: string
};

type MyProps = {
    children: React.ReactNode
};

type MyState = {
    totalInfo: TotalInfo[]
};

class ContextProvider extends React.Component<MyProps, MyState> {
    TAG = 'ContextProvider'
    constructor(props: any) {
        super(props);
        this.state = {
            totalInfo: new Array()
        }
    }
    refreshManageFunc!: Function; // Manage 페이지의 데이터를 갱신하기 위함

    func = {
        refreshTotalInfo: () => new Promise<TotalInfo[]>(async (resolve, reject) => {
            let vehicleInfo: serverReturnData = await getVehicleInfo()
            let paymentInfo: serverReturnData = await getPaymentInfo()
            let totalInfo = vehicleInfo.lists
            for (const vehicle of totalInfo) {
                for (const payment of paymentInfo.lists) {
                    if (vehicle.uuid == payment.ticket_vehicle_uuid) {
                        Object.assign(vehicle, payment) // json 결합하여 vehicle에 입력
                        break;
                    }
                }
            }
            this.setState(
                { totalInfo },
                () => resolve(totalInfo)
            )
        }),
        updateTotalData: (totalInfo: TotalInfo[]) => new Promise<TotalInfo[]>((resolve, reject) => {
            this.setState({ totalInfo }, () => {
                resolve(totalInfo)
            })
        }),
    }

    manageFunc = {
        saveRefreshManageFunc: (data: Function) => {
            this.refreshManageFunc = data
        },
        callRefreshManageFunc: () => {
            this.refreshManageFunc()
        }
    }

    render() {
        const { state, func, manageFunc } = this;
        const value: any = {
            state,
            func,
            manageFunc,
        };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    ContextProvider,
    ContextConsumer,
};
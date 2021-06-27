
import { useDispatch, useSelector } from "react-redux";
import { allContact, selecContact } from "../../redux/slice/Contact";


interface ISvg {
    color: string,
    id: number
}

const Star: React.FC<ISvg> = (props) => {

    const selectContact = useSelector(selecContact);
    const contactData = selectContact.contact;
    const dispatch = useDispatch();

    const addToFavorite = (id: number) => {
        const filt: any = contactData.data?.filter((e: any) => e.id === id)[0];
        const x = { ...filt };
        x.favorite = !x.favorite;
        const filt2: any = contactData.data?.filter((e: any) => e.id !== id);
        const y: any = [x, ...filt2];
        dispatch(allContact({
            data: y
        }));

    }

    return (
        <div onClick={() => addToFavorite(props.id)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M19.9799 7.67672C19.9216 7.49673 19.7547 7.37412 19.5651 7.37412H12.4931L10.4149 0.722968C10.301 0.361224 9.69838 0.361224 9.58449 0.722968L7.50627 7.37412H0.435173C0.245599 7.37412 0.0786463 7.49673 0.0204005 7.67672C-0.0361334 7.85672 0.0282264 8.05322 0.182136 8.16368L5.99763 12.3166L3.50639 18.9608C3.43942 19.1399 3.49681 19.3417 3.64811 19.4582C3.80027 19.5756 4.0081 19.5773 4.16637 19.4678L10.0001 15.3L15.8339 19.4678C15.9104 19.5217 15.9982 19.5486 16.0869 19.5486C16.18 19.5486 16.2739 19.5191 16.3521 19.4582C16.5034 19.3417 16.5608 19.1399 16.4939 18.9608L14.0026 12.3166L19.8181 8.16368C19.9721 8.05322 20.0364 7.85672 19.9799 7.67672Z" fill={props.color} />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="20" height="20" fill={props.color} />
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}

export default Star

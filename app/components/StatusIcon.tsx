import {CheckmarkCircleFillIcon, XMarkOctagonFillIcon} from "@navikt/aksel-icons";

type StatusIconProps = {
    status: boolean | undefined,
}

export const StatusIcon = (
    {
        status
    }: StatusIconProps
) => {
    if (status === undefined) return null

    if (status) {
        return (
            <CheckmarkCircleFillIcon title="a11y-title" fontSize="1.5rem"/>
        )
    } else return (
        <XMarkOctagonFillIcon title="a11y-title" fontSize="1.5rem"/>

    )
}

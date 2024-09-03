
import { ChooseProductModal, ProductImage } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { Container } from "@/components/shared";
import { notFound } from "next/navigation";
import { Title } from "@/components/shared/title";
import { GroupVariants } from "@/components/shared/group-variants";

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            ingredients: true,
            items: true,
        },
    })

    if (!product) {
        return notFound();
    };
    return (
        <ChooseProductModal product={product}></ChooseProductModal>
    )
}
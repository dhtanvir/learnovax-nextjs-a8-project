import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const CoursesCard = ({ course }) => {
   const {  title, instructor, rating, image, category } = course;

  return (
    <div>
      <Card className="border rounded-xl p-3 hover:shadow-xl transition">
        {/* Image */}
        <div className="relative w-full aspect-video">
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover rounded-xl"
          />

          {/* Category */}
          <Chip size="sm" className="absolute right-2 top-2">
            {category}
          </Chip>
        </div>

        {/* Content */}
        <div className="mt-3 space-y-1">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-sm text-gray-500">{instructor}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-500" />
          <p>{rating}</p>
        </div>

        {/* Button */}
        <Link href={'/courses'}>
          <Button variant="outline" className="w-full mt-3">
            View Details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CoursesCard;

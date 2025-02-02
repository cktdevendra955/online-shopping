package com.core.online_shopping.dto.user;



import com.core.online_shopping.entity.BaseEntity;
import com.core.online_shopping.entity.user.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto extends BaseEntity {

    private UserProfileDto userProfile;

    private String name;
    private String email;
    private String password;
    private String slug;


    public static UserDto entityToDto(UserEntity userEntity){
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userEntity,userDto);
        return userDto;
    }

    public static UserEntity dtoToEntity(UserDto userDto){
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(userDto,userDto);
        return userEntity;
    }

}
